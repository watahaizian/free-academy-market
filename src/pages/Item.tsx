import { useNavigate } from 'react-router-dom';

function Item() {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-4">
        <h1 className="text-xl mb-4">Itemページ</h1>
        <div>ここにはアイテムの詳細を配置</div>
        <button
          className="bg-blue-500 text-white p-2 mr-2"
          onClick={() => navigate('/')}
        >
          Homeページ
        </button>
        <button
          className="bg-orange-500 text-white p-2 mr-2"
          onClick={() => navigate('/chat')}
        >
          Chatページ
        </button>
      </div>
    </>
  );
}
export default Item;
