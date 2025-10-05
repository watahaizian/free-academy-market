import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ItemPage from "./pages/ItemDetail";
import ChatPage from "./pages/Chat";
import Chats from "./pages/Chats";
import SoldItem from "./pages/SoldItem";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      {/* ヘッダーとフッターを常に表示するページ */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chats" element={<Chats />} />
        <Route path="sold-items" element={<SoldItem />} />
        <Route path="/item/:item_id" element={<ItemPage />} />
        <Route path="/chat/:item_id" element={<ChatPage />} />
        <Route path="/mypage" element={<MyPage />} />

        {/* 独立したページ */}
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
