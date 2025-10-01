import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Login from './pages/Login';
import Item from './pages/Item';
import Chat from './pages/Chat';
import SoldItem from './pages/SoldItem';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item" element={<Item />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/soldItem" element={<SoldItem />} />
      </Routes>
    </>
  );
}

export default App;
