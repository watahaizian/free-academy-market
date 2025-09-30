import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Homeページ</h1>

      <div>ここにアイテムカードを配置</div>
      <div className="flex gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mb-4">
        <button
          className="bg-purple-500 text-white p-2 mr-2"
          onClick={() => navigate('/chats')}
        >
          Chatsページ
        </button>
        <button
          className="bg-orange-500 text-white p-2 mr-2"
          onClick={() => navigate('/chat')}
        >
          Chatページ
        </button>
        <button
          className="bg-red-500 text-white p-2 mr-2"
          onClick={() => navigate('/soldItem')}
        >
          出品一覧ページ
        </button>
      </div>
    </div>
  );
}
export default Home;
