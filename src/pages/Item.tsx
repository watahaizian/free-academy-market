import { useNavigate } from "react-router-dom";
import type { Item } from "../types/item";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function ItemPage() {
  const navigate = useNavigate();
  const { item_id: itemIdParam } = useParams();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  // ローディング中の表示
  if (loading) {
    return (
      <div className="p-4">
        <p>読み込み中...</p>
      </div>
    );
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
      <div className="p-4">
        <h1 className="text-xl mb-4">Itemページ</h1>
        <div>ここにはアイテムの詳細を配置</div>
        <div>{item.item_name}</div>
        <div>{item.item_detail}</div>
        <div>¥{item.item_price}</div>
        <div>
          <img src={item.item_img} alt={item.item_name} />
        </div>
        <button
          className="bg-blue-500 text-white p-2 mr-2"
          onClick={() => navigate("/")}
        >
          Homeページ
        </button>
        <button
          className="bg-orange-500 text-white p-2 mr-2"
          onClick={() => navigate("/chat/" + item.item_id)}
        >
          Chatページ
        </button>
      </div>
    </>
  );
}
export default ItemPage;
