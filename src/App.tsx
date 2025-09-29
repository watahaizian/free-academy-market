import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
