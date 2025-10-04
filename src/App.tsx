import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Login from './pages/Login';
import Item from './pages/Item';
import Chat from './pages/Chat';
import AuthCallback from './pages/AuthCallback';
import Setup from './pages/Setup';
import SellItems from './pages/SellItems';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chats" element={<Chats />} />
        <Route path="login" element={<Login />} />
        <Route path="item/:item_id" element={<ItemPage />} />
        <Route path="chat" element={<Chat />} />
        <Route path="sellItems" element={<SellItems />} />
      </Route>
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/setup" element={<Setup />} />
    </Routes>
  );
}

export default App;
