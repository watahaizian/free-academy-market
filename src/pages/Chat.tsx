import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import type { Chat } from "../types/chat";

function ChatPage() {
  const navigate = useNavigate();
  const { item_id } = useParams();
  const [chat, setChat] = useState<Chat | null>(null);

  useEffect(() => {
    const fetchChat = async () => {
      const { data, error } = await supabase
        .from("chats")
        .select("*")
        .eq("item_id", item_id);
      setChat(data?.[0] || null);
      if (error) {
        alert("チャットの取得に失敗しました" + error.message);
      }
    };
    fetchChat();
  }, [item_id]);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Chatページ</h1>
      <div>ここにチャットの内容を配置</div>
      <div>{chat?.chat_id}</div>
      <div>{chat?.item_id}</div>
      <div>{chat?.seller_user_id}</div>
      <div>{chat?.buyer_user_id}</div>
      <button
        className="bg-blue-500 text-white p-2 mr-2"
        onClick={() => navigate("/")}
      >
        Homeページ
      </button>

      <button
        className="bg-purple-500 text-white p-2 mr-2"
        onClick={() => navigate("/chats")}
      >
        Chatsページ
      </button>
    </div>
  );
}
export default ChatPage;
