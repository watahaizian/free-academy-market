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
    const name = (document.getElementById("new-name") as HTMLInputElement).value;
    const schoolName = (document.getElementById("new-school-name") as HTMLInputElement).value;
    const schoolGrade = (document.getElementById("new-school-grade") as HTMLInputElement).value;

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
    const uuid = data.user?.id;
    const { data: data2, error: error2 } = await supabase.from("profiles").insert({
      id: uuid,
      original_name: name,
      school_name: schoolName,
      grade: schoolGrade,
      user_icon: "",
    });
    if (error2) {
      alert("ユーザー登録エラー: " + error2.message);
    } else {
      alert("ユーザー登録成功!");
    }
    console.log(data2);
  }

  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
      },
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
          <div>
            <label htmlFor="new-name">名前</label>
            <input type="text" id="new-name" required />
          </div>
          <div>
            <label htmlFor="new-school-name">学校名</label>
            <input type="text" id="new-school-name" required />
          </div>
          <div>
            <label htmlFor="new-school-grade">学年</label>
            <input type="text" id="new-school-grade" required />
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
