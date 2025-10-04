import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Login from './pages/Login';
import ItemPage from "./pages/Item";
import ChatPage from "./pages/Chat";
import AuthCallback from './pages/AuthCallback';
import Setup from './pages/Setup';
import SoldItem from "./pages/SoldItem";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chats" element={<Chats />} />
        <Route path="login" element={<Login />} />
        <Route path="item/:item_id" element={<ItemPage />} />
        <Route path="chat/:item_id" element={<ChatPage />} />
        <Route path="soldItem" element={<SoldItem />} />
      </Route>
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/setup" element={<Setup />} />
    </Routes>
  );
}

export default App;
