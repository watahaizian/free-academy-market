import { useNavigate } from "react-router-dom";
function Chat() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Chatページ</h1>
      <button onClick={() => navigate("/")}>Homeページ</button>
      <button onClick={() => navigate("/login")}>Loginページ</button>
      <button onClick={() => navigate("/chat")}>Chatページ</button>
    </>
  );
}
export default Chat;
