import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Loginページ</h1>
      <button onClick={() => navigate("/")}>Homeページ</button>
      <button onClick={() => navigate("/login")}>Loginページ</button>
      <button onClick={() => navigate("/chat")}>Chatページ</button>
    </>
  );
}
export default Login;
