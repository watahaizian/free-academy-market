import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ItemPage from "./pages/Item";
import ChatPage from "./pages/Chat";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/item/:item_id" element={<ItemPage />} />
      <Route path="/chat/:item_id" element={<ChatPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
