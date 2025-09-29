import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
        
function Login() {
  const navigate = useNavigate();

  const toggleForm = () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    if (loginForm && registerForm) {
      loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
      registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById("new-email") as HTMLInputElement).value;
    const password = (document.getElementById("new-password") as HTMLInputElement).value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log(data);

    if (error) {
      alert("登録エラー: " + error.message);
    } else {
      alert("登録成功! 確認メールを送信しました。");
      toggleForm();
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data);

    if (error) {
      alert("ログインエラー: " + error.message);
    } else {
      alert("ログイン成功!");
      navigate("/");
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Loginページ</h1>
      <div id="login-form">
          <h1>ログイン</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">ログイン</button>
        </form>
        <div>
          <p>アカウントをお持ちでない方は<a href="#" onClick={toggleForm}>こちら</a></p>
        </div>
      </div>

      <div id="register-form" style={{ display: "none" }}>
        <h1>新規登録</h1>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="new-email">メールアドレス</label>
            <input type="email" id="new-email" required />
          </div>
          <div>
            <label htmlFor="new-password">パスワード</label>
            <input type="password" id="new-password" required />
          </div>
          <button type="submit">新規登録</button>
        </form>
        <div>
          <p>アカウントをお持ちの方は<a href="#" onClick={toggleForm}>こちら</a></p>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white p-2 mr-2"
        onClick={() => navigate('/')}
      >
        Homeページ
      </button>
    </div>
  );
}
export default Login;
