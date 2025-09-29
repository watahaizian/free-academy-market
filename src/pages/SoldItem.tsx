import { useNavigate } from 'react-router-dom';

function SoldItem() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>出品一覧</h1>
      <button
        className="bg-blue-500 text-white p-2 mr-2"
        onClick={() => navigate('/')}
      >
        Homeページ
      </button>
    </div>
  );
}

export default SoldItem;
