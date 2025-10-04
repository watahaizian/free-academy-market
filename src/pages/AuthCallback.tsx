import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthCallback = () => {
  const [msg, setMsg] = useState("サインイン処理中…");

  useEffect(() => {
    // セッション確認
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await routeByProfile(session.user.id);
      }
    })();

    // 認証状態変化の監視
    const { data: sub } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        await routeByProfile(session.user.id);
      } else if (event === "USER_UPDATED" && session?.user) {
        await routeByProfile(session.user.id);
      }
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const routeByProfile = async (uid: string) => {
    try {
      setMsg("プロフィール状態を確認中…");
      const { data, error } = await supabase
        .from("profiles")
        .select("profile_completed")
        .eq("id", uid)
        .maybeSingle();

      if (error) throw error;

      // プロファイルが無いか未完成の場合、セットアップへ
      if (!data?.profile_completed) {
        window.location.replace("/setup");
        return;
      }
      // 完了済みならホームへ
      window.location.replace("/");
    } catch (e) {
      console.error(e);
      setMsg("状態確認でエラーが発生しました");
      window.location.replace("/setup");
    }
  };

  return (
    <div className="min-h-[60vh] grid place-items-center p-6">
      <div className="rounded-lg border p-6 max-w-md w-full text-center">
        <p className="text-sm text-gray-700">{msg}</p>
      </div>
    </div>
  );
}

export default AuthCallback;
