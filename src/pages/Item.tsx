import { useNavigate } from "react-router-dom";
import type { Item } from "../types/item";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function ItemPage() {
  const navigate = useNavigate();
  const { item_id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      const { data, error } = await supabase
        .from("items")
        .select("*")
        .eq("item_id", item_id);
      setItem(data?.[0] || null);
      if (error) {
        alert("アイテムの取得に失敗しました" + error.message);
      }
    };
    fetchItem();
  }, [item_id]);

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl mb-4">Itemページ</h1>
        <div>ここにはアイテムの詳細を配置</div>
        <div>{item?.item_name}</div>
        <div>{item?.item_detail}</div>
        <div>{item?.item_price}</div>
        <div>
          <img src={item?.item_img} alt={item?.item_name} />
        </div>
        <button
          className="bg-blue-500 text-white p-2 mr-2"
          onClick={() => navigate("/")}
        >
          Homeページ
        </button>
        <button
          className="bg-orange-500 text-white p-2 mr-2"
          onClick={() => navigate("/chat/" + item_id)}
        >
          Chatページ
        </button>
      </div>
    </>
  );
}
export default ItemPage;
