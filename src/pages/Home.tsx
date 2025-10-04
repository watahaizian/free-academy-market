<<<<<<< HEAD
import { useOutletContext } from 'react-router-dom';
import CategorySection from '../components/CategorySection';
import type { CategoryList } from '../types/item';
import NewItems from './newItems';

type TabType = 'home' | 'newItems' | 'category';

interface HomeContext {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Home() {
  const { activeTab, setActiveTab } = useOutletContext<HomeContext>();

  // デモ用の教科書データ
  const categoryList = [
    {id: "textitems",
     name: "教科書",
     items: [
      { id: 1, title: "数学I", price: 1200, image: "https://picsum.photos/200/250?random=1", isFavorite: false },
      { id: 2, title: "英語表現I", price: 1500, image: "https://picsum.photos/200/250?random=2", isFavorite: true },
      { id: 3, title: "物理基礎", price: 1800, image: "https://picsum.photos/200/250?random=3", isFavorite: false },
      { id: 4, title: "化学基礎", price: 1600, image: "https://picsum.photos/200/250?random=4", isFavorite: false },
      { id: 5, title: "生物基礎", price: 1400, image: "https://picsum.photos/200/250?random=5", isFavorite: true },
      { id: 6, title: "世界史B", price: 2000, image: "https://picsum.photos/200/250?random=6", isFavorite: false },
      { id: 7, title: "日本史B", price: 1900, image: "https://picsum.photos/200/250?random=7", isFavorite: false },
      { id: 8, title: "地理B", price: 1700, image: "https://picsum.photos/200/250?random=8", isFavorite: true },
      { id: 9, title: "現代文", price: 1300, image: "https://picsum.photos/200/250?random=9", isFavorite: false },
      { id: 10, title: "古典", price: 1100, image: "https://picsum.photos/200/250?random=10", isFavorite: false },
     ]
    },
    {id: "stationery",
     name: "文房具",
     items: [
      { id: 1, title: "数学I", price: 1200, image: "https://picsum.photos/200/250?random=1", isFavorite: false },
      { id: 2, title: "英語表現I", price: 1500, image: "https://picsum.photos/200/250?random=2", isFavorite: true },
      { id: 3, title: "物理基礎", price: 1800, image: "https://picsum.photos/200/250?random=3", isFavorite: false },
      { id: 4, title: "化学基礎", price: 1600, image: "https://picsum.photos/200/250?random=4", isFavorite: false },
      { id: 5, title: "生物基礎", price: 1400, image: "https://picsum.photos/200/250?random=5", isFavorite: true },
      { id: 6, title: "世界史B", price: 2000, image: "https://picsum.photos/200/250?random=6", isFavorite: false },
      { id: 7, title: "日本史B", price: 1900, image: "https://picsum.photos/200/250?random=7", isFavorite: false },
      { id: 8, title: "地理B", price: 1700, image: "https://picsum.photos/200/250?random=8", isFavorite: true },
      { id: 9, title: "現代文", price: 1300, image: "https://picsum.photos/200/250?random=9", isFavorite: false },
      { id: 10, title: "古典", price: 1100, image: "https://picsum.photos/200/250?random=10", isFavorite: false },
     ]
    },
    {id: "electronic",
     name: "電子機器",
     items: [
      { id: 1, title: "数学I", price: 1200, image: "https://picsum.photos/200/250?random=1", isFavorite: false },
      { id: 2, title: "英語表現I", price: 1500, image: "https://picsum.photos/200/250?random=2", isFavorite: true },
      { id: 3, title: "物理基礎", price: 1800, image: "https://picsum.photos/200/250?random=3", isFavorite: false },
      { id: 4, title: "化学基礎", price: 1600, image: "https://picsum.photos/200/250?random=4", isFavorite: false },
      { id: 5, title: "生物基礎", price: 1400, image: "https://picsum.photos/200/250?random=5", isFavorite: true },
      { id: 6, title: "世界史B", price: 2000, image: "https://picsum.photos/200/250?random=6", isFavorite: false },
      { id: 7, title: "日本史B", price: 1900, image: "https://picsum.photos/200/250?random=7", isFavorite: false },
      { id: 8, title: "地理B", price: 1700, image: "https://picsum.photos/200/250?random=8", isFavorite: true },
      { id: 9, title: "現代文", price: 1300, image: "https://picsum.photos/200/250?random=9", isFavorite: false },
      { id: 10, title: "古典", price: 1100, image: "https://picsum.photos/200/250?random=10", isFavorite: false },
     ]
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-4">
            {categoryList.map((category: CategoryList) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        );
      case 'newItems': {
        const allItems = categoryList.flatMap((category: CategoryList) =>
          category.items.map((item) => ({
            ...item,
            id: parseInt(`${category.id.replace(/\D/g, '')}${item.id}`), // 一意のIDを作成
            isFavorite: false
          }))
        );

        return (
          <div>
            <h2 className="text-xl font-bold mb-4">新着アイテム</h2>
            <NewItems items={allItems} />
          </div>
        );
      }
      case 'category':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">カテゴリ一覧</h2>
            <div className="grid grid-cols-2 gap-4">
              {categoryList.map((category: CategoryList) => (
                <div key={category.id} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.items.length}件のアイテム</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent()}
=======
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
>>>>>>> a67d4c33bf49ad5b97404214b8948245a468cde8
    </div>
  );
}
