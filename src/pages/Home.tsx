import { ArrowRight, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
   // デモ用の教科書データ
  const textbooks = [
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
  ];

  const [isFavorite, setIsFavorite] = useState<number[]>([]);

  const handleHeartClick = (id: number) => {
    setIsFavorite((prevIds) => {
      return prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id];
    });
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">教科書</h1>
        <h2 className="flex items-center gap-2 text-sm text-blue-800">すべて見る <ArrowRight /></h2>
      </div>
      <div className="flex overflow-x-auto space-x-4 py-4 snap-x snap-mandatory scrollbar-hide">
        {textbooks.map((book) =>
          <div key={book.id} className="w-1/3 flex-shrink-0 snap-start">
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-32 object-cover shadow-md"
              />
              <button
                onClick={() => handleHeartClick(book.id)}
                className="absolute bottom-2 right-2 z-10 p-1 rounded-full hover:bg-black/20 transition-colors"
                aria-label={isFavorite.includes(book.id) ? "お気に入りから削除" : "お気に入りに追加"}
              >
                <Heart
                  className={`${isFavorite.includes(book.id) ? 'text-red-500 fill-red-500' : 'text-white'} transition-colors`}
                />
              </button>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900 truncate">{book.title}</h3>
              <p className="text-base font-black text-red-500">¥{book.price.toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
