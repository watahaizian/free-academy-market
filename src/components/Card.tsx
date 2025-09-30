import { useNavigate } from "react-router-dom";

function Card({ item }: { item: any }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4">
      <h2 className="mb-2">{item.item_name}</h2>
      <button
        className="bg-gray-500 text-white p-1"
        onClick={() => navigate("/item")}
      >
        Itemページ
      </button>
    </div>
  );
}
export default Card;
