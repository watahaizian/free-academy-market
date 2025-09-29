import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Loginページ</h1>
      <div>ここにログインフォームを配置</div>
      <button
        className="bg-blue-500 text-white p-2 mr-2"
        onClick={() => navigate("/")}
      >
        Homeページ
      </button>
    </div>
  );
}
export default Login;
