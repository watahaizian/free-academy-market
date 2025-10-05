import { useNavigate } from "react-router-dom";
import type { Item } from "../types/item";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import RabbitButton from "../components/RabbitButton";
import { useAuth } from "../hooks/useAuth";

function ItemPage() {
  const navigate = useNavigate();
  const { item_id: itemIdParam } = useParams();
  const { user } = useAuth();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isRabbitLiked, setIsRabbitLiked] = useState(false)

  useEffect(() => {
    const fetchItem = async () => {
      // item_id を数値に変換
      const item_id = Number(itemIdParam);

      if (isNaN(item_id)) {
        alert("無効な商品IDです");
        navigate("/");
        return;
      }

      const { data, error } = await supabase
        .from("items")
        .select("*")
        .eq("item_id", item_id)
        .single();

      if (error) {
        alert("アイテムの取得に失敗しました: " + error.message);
        navigate("/");
        return;
      }

      setItem(data);
      setLoading(false);
    };
    fetchItem();
  }, [itemIdParam, navigate]);

  // 自分の商品かどうかの判定
  const isMyItem = user?.id === item?.user_id;

  const handleDeleteItem = async () => {
    // 確認ダイアログ
    const confirmed = window.confirm(
      `「${item?.item_name}」を削除しますか？\nこの操作は取り消せません。`
    );

    if (!confirmed) {
      return;
    }

    try {
      // Supabaseから削除
      const { error } = await supabase
        .from("items")
        .delete()
        .eq("item_id", item?.item_id);

      // エラーチェック
      if (error) {
        console.error("削除エラー:", error);
        alert("商品の削除に失敗しました: " + error.message);
        return;
      }

      // 成功時：ホームページに遷移
      alert("商品を削除しました");
      navigate("/");
    } catch (err) {
      console.error("予期しないエラー:", err);
      alert("商品の削除中にエラーが発生しました");
    }
  };

  // ローディング中の表示
  if (loading) {
    return (
      <div className="p-4">
        <p>読み込み中...</p>
      </div>
    );
  }

  const handleRabbitClick = () => {
    setIsRabbitLiked(!isRabbitLiked)
    console.log(`スペシャルいいね${isRabbitLiked ? '解除' : '追加'}されました！`)
  }
  // アイテムが存在しない場合
  if (!item) {
    return (
      <div className="p-4">
        <p>商品が見つかりません</p>
        <button
          className="bg-blue-500 text-white p-2 mt-2"
          onClick={() => navigate("/")}
        >
          Homeページ
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-80 border border-gray-200 rounded-md">
        <img src={item.item_img} alt={item.item_name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 pt-3">
        <p className="text-lg text-gray-800 font-medium">{item.item_name}</p>
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm text-black">¥</span>
            <span className="text-4xl text-black-900 font-extrabold">{item.item_price}</span>
          </div>
          <RabbitButton 
            className="px-5"
            onClick={handleRabbitClick} 
            isActive={isRabbitLiked}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-7 pb-15">
        <h1 className="font-bold">商品情報</h1>
        <p className="text-base">{item.item_detail}</p>
      </div>
      <button
        className="bg-blue-500 text-white p-2 mr-2 border border-gray-200 rounded-md"
        onClick={() => navigate("/")}
      >
        Homeページ
      </button>
      <button
        className="bg-orange-500 text-white p-2 mr-2 border border-gray-200 rounded-md"
        onClick={() => navigate("/chat/" + item.item_id)}
      >
        Chatページ
      </button>
      {isMyItem && (
        <button
          className="bg-red-500 text-white p-2 mr-2 border border-gray-200 rounded-md"
          onClick={handleDeleteItem}
        >
          商品を削除
        </button>
      )}
    </>
  );
}
export default ItemPage;
