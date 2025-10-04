import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Login from './pages/Login';
import Item from './pages/Item';
import Chat from './pages/Chat';
import SellItems from './pages/SellItems';
import NewItems from './pages/newItems';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chats" element={<Chats />} />
        <Route path="login" element={<Login />} />
        <Route path="item" element={<Item />} />
        <Route path="chat" element={<Chat />} />
        <Route path="sellItems" element={<SellItems />} />
        <Route path="newItems" element={<NewItems />} />
      </Route>
    </Routes>
  );
}

export default App;
