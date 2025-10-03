import { Link } from 'react-router-dom';
import { Home, MessageCircle, Plus } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-around">
          <Link className="flex flex-col items-center" to="/">
            <Home className="text-gray-500 hover:text-gray-700" />
            <p className="text-sm text-gray-500 hover:text-gray-700">Home</p>
          </Link>
          <Link className="flex flex-col items-center" to="/SellItems">
            <Plus className="text-gray-500 hover:text-gray-700" />
            <p className="text-sm text-gray-500 hover:text-gray-700">出品</p>
          </Link>
          <Link className="flex flex-col items-center" to="/Chats">
            <MessageCircle className="text-gray-500 hover:text-gray-700" />
            <p className="text-sm text-gray-500 hover:text-gray-700">Chats</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
