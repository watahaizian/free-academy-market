import { useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import type { Item } from "../types/item";
import ItemCard from "../components/ItemCard";

function Home() {
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
    <div className="flex flex-wrap snap-x snap-mandatory scrollbar-hide">
      {items.map((item) => (
        <div key={item.item_id} className="w-1/3 flex-shrink-0 snap-start"> 
          <ItemCard key={item.item_id} item={item} />
        </div>
      ))}
    </div>
  );
}
export default Home;
