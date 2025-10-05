import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";
import type { Chat, ChatHistory } from "../types/chat";
import type { Item } from "../types/item";

function ChatPage() {
  const navigate = useNavigate();
  const { item_id: itemIdParam } = useParams();
  const { user, loading: authLoading } = useAuth();

  const [chat, setChat] = useState<Chat | null>(null);
  const [item, setItem] = useState<Item | null>(null);
  const [messages, setMessages] = useState<ChatHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeChat = async () => {
      // ユーザーがログインしていない場合は処理しない
      if (!user) {
        return;
      }

      const item_id = Number(itemIdParam);

      if (isNaN(item_id)) {
        alert("無効な商品IDです");
        navigate("/");
        return;
      }

      // ② 商品情報を取得
      const { data: itemData, error: itemError } = await supabase
        .from("items")
        .select("*")
        .eq("item_id", item_id)
        .single();

      if (itemError || !itemData) {
        alert("商品が見つかりません: " + itemError?.message);
        navigate("/");
        return;
      }
      setItem(itemData);

      // ③ チャットルームを検索
      const { data: existingChats, error: chatError } = await supabase
        .from("chats")
        .select("*")
        .eq("item_id", item_id);

      if (chatError) {
        console.error("チャット検索エラー:", chatError);
        alert("チャットの取得に失敗しました: " + chatError.message);
        return;
      }

      // デバッグ情報
      console.log("=== チャット検索結果 ===");
      console.log("item_id:", item_id);
      console.log("user.id:", user.id);
      console.log("取得したチャット数:", existingChats?.length || 0);
      console.log("全チャット:", existingChats);

      // 現在のユーザーが参加しているチャットを探す
      const existingChat =
        existingChats?.find(
          (chat) =>
            chat.buyer_user_id === user.id || chat.seller_user_id === user.id
        ) || null;

      console.log("マッチしたチャット:", existingChat);

      // ④ 分岐処理
      if (existingChat) {
        // 既存のチャットルームがある
        setChat(existingChat);

        // メッセージ履歴を取得
        const { data: messagesData, error: messagesError } = await supabase
          .from("chat_histories")
          .select("*")
          .eq("chat_id", existingChat.chat_id)
          .order("chat_created_at", { ascending: true });

        if (messagesError) {
          alert("メッセージの取得に失敗しました: " + messagesError.message);
        } else {
          setMessages(messagesData || []);
        }
      } else {
        // 新規チャットルーム作成

        // 出品者自身かチェック
        if (itemData.user_id === user.id) {
          setError("自分の商品にはチャットできません");
          setLoading(false);
          return;
        }

        // 新規チャットルーム作成
        const { data: newChat, error: createError } = await supabase
          .from("chats")
          .insert({
            item_id: item_id,
            seller_user_id: itemData.user_id,
            buyer_user_id: user.id,
          })
          .select()
          .single();

        if (createError) {
          setError(
            "チャットルームの作成に失敗しました: " + createError.message
          );
          setLoading(false);
          return;
        }

        setChat(newChat);
        setMessages([]);
      }

      setLoading(false);
    };

    // authLoading が完了してから実行
    if (!authLoading) {
      initializeChat();
    }
  }, [itemIdParam, user, authLoading, navigate]);

  // ローディング中の表示
  if (authLoading || loading) {
    return (
      <div className="p-4">
        <p>読み込み中...</p>
      </div>
    );
  }

  // ログインしていない場合
  if (!user) {
    return (
      <div className="p-4">
        <p>ログインが必要です</p>
        <button
          className="bg-blue-500 text-white p-2 mt-2"
          onClick={() => navigate("/login")}
        >
          ログインページへ
        </button>
      </div>
    );
  }
  // エラーがある場合
  if (error) {
    return (
      <div className="p-4">
        <div className="mb-4 p-4 bg-red-100 border border-red-400 rounded">
          <p className="text-red-700">{error}</p>
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => navigate("/")}
        >
          Homeページに戻る
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Chatページ</h1>

      {/* 商品情報 */}
      {item && (
        <div className="mb-4 p-4 border rounded">
          <h2 className="font-bold">{item.item_name}</h2>
          <p>¥{item.item_price}</p>
        </div>
      )}

      {/* チャット情報（デバッグ用） */}
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <div>Chat ID: {chat?.chat_id}</div>
        <div>Item ID: {chat?.item_id}</div>
        <div>出品者: {chat?.seller_user_id}</div>
        <div>購入希望者: {chat?.buyer_user_id}</div>
      </div>

      {/* メッセージ一覧 */}
      <div className="mb-4 p-4 border rounded min-h-[200px]">
        <h3 className="font-bold mb-2">メッセージ</h3>
        {messages.length === 0 ? (
          <p className="text-gray-500">まだメッセージがありません</p>
        ) : (
          <div className="space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.history_id}
                className={`p-2 rounded ${
                  msg.user_id === user.id
                    ? "bg-blue-100 ml-auto max-w-xs"
                    : "bg-gray-200 mr-auto max-w-xs"
                }`}
              >
                <p>{msg.chat_msg}</p>
                <p className="text-xs text-gray-500">
                  {msg.chat_created_at
                    ? new Date(msg.chat_created_at).toLocaleString()
                    : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ナビゲーションボタン */}
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => navigate("/")}
        >
          Homeページ
        </button>
        <button
          className="bg-purple-500 text-white p-2 rounded"
          onClick={() => navigate("/chats")}
        >
          Chatsページ
        </button>
      </div>
    </div>
  );
}

export default ChatPage;
