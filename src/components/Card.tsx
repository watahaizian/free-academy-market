import { useNavigate } from 'react-router-dom';

type Item = {
  item_name: string;
  // 必要に応じて他のプロパティも追加してください
};

function Card({ item }: { item: Item }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4">
      <h2 className="mb-2">{item.item_name}</h2>
      <button
        className="bg-gray-500 text-white p-1"
        onClick={() => navigate('/item')}
      >
        Itemページ
      </button>
    </div>
  );
}
export default Card;
