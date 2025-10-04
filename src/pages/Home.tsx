import { useNavigate , useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import type { Item } from "../types/item";
import Card from "../components/Card";
function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim();
  const [items, setItems] = useState<Item[]>([]);
  //fetchItemsTable

  const fetchItemsTable = async (keyword: string) => {
    let query = supabase.from("items").select();
    if (keyword && keyword.trim().length > 0){
      query = query.or(`item_name.ilike.%${keyword}%,item_detail.ilike.%${keyword}%`);
    }
    const { data, error } = await query;
    setItems(data || []);
    if (error) {
      alert("itemsテーブルの取得に失敗しました" + error.message);
    }
  };

  useEffect(() => {
    fetchItemsTable(q);
  }, [q]);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Homeページ</h1>
      {q && (
        <div className = "mb-2 text-sm text-gray-500">
          検索ワード: <span className="font-medium">{q}</span>
        </div>
      )}

      <div>ここにアイテムカードを配置</div>
      <div className="flex gap-4">
        {items.map((item) => (
          <Card key={item.item_id} item={item} />
        ))}
      </div>
      <div className="mb-4">
        <button
          className="bg-purple-500 text-white p-2 mr-2"
          onClick={() => navigate("/chats")}
        >
          Chatsページ
        </button>
        <button
          className="bg-orange-500 text-white p-2 mr-2"
          onClick={() => navigate("/chat")}
        >
          Chatページ
        </button>
        <button
          className="bg-red-500 text-white p-2 mr-2"
          onClick={() => navigate("/soldItem")}
        >
          出品一覧ページ
        </button>
      </div>
    </div>
  );
}
export default Home;
