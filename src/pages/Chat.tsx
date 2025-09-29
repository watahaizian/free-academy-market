import { useNavigate } from 'react-router-dom';

function Chat() {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Chatページ</h1>
      <div>ここにチャットの内容を配置</div>
      <button
        className="bg-blue-500 text-white p-2 mr-2"
        onClick={() => navigate('/')}
      >
        Homeページ
      </button>

      <button
        className="bg-purple-500 text-white p-2 mr-2"
        onClick={() => navigate('/chats')}
      >
        Chatsページ
      </button>
    </div>
  );
}
export default Chat;
