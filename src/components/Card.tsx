import { useNavigate } from "react-router-dom";
import type { Item } from "../types/item";

function Card({ item }: { item: Item }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4">
      <h2 className="mb-2">{item.item_name}</h2>
      <img src={item.item_img} alt={item.item_name} />
      <p>{item.item_detail}</p>
      <p>{item.item_price}</p>
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
