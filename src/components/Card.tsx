import { useNavigate } from "react-router-dom";
import type { Item } from "../types/item";

function Card({ item }: { item: Item }) {
  const navigate = useNavigate();

  return (
    <div
      className="border p-4 transition-all duration-300"
      onClick={() => navigate("/item/" + item.item_id)}
      style={{ cursor: "pointer" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "lightgray";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "";
      }}
    >
      <h2 className="mb-2">{item.item_name}</h2>
      <img src={item.item_img} alt={item.item_name} />
      <p>{item.item_detail}</p>
      <p>{item.item_price}</p>
    </div>
  );
}
export default Card;
