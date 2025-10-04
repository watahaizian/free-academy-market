import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const [userId, setUserId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState<number | "">("");
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconPreview, setIconPreview] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate("/login");
          return;
        }
        setUserId(user.id);

        const { data } = await supabase
          .from("profiles")
          .select("original_name, school_name, grade, user_icon, profile_completed")
          .eq("id", user.id)
          .maybeSingle();

        if (data) {
          setName(data.original_name ?? "");
          setSchoolName(data.school_name ?? "");
          setGrade(typeof data.grade === "number" ? data.grade : "");
          if (data.profile_completed) {
            navigate("/");
            return;
          }
        }
      } catch (e) {
        console.error(e);
        setErr("初期化でエラーが発生しました");
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const onPickIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setIconFile(f);
    if (f) setIconPreview(URL.createObjectURL(f));
    else setIconPreview(null);
  };

  const iconExt = useMemo(() => {
    if (!iconFile) return null;
    const ext = iconFile.name.split(".").pop()?.toLowerCase();
    return ext || "jpg";
  }, [iconFile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;
    setSaving(true);
    setErr(null);
    setMsg(null);

    try {

      // アイコンアップロードとURL取得
      let iconUrl = "";
      if (iconFile) {
        const path = `${userId}/${Date.now()}.${iconExt}`;
        const { error: upErr } = await supabase
          .storage
          .from("user_icons")
          .upload(path, iconFile, { cacheControl: "3600", upsert: true });
        if (upErr) throw upErr;

        const { data: pub } = supabase.storage.from("user_icons").getPublicUrl(path);
        iconUrl = pub.publicUrl;
      }

      await supabase.auth.updateUser({
        data: {
          original_name: name,
          school_name: schoolName,
          grade: grade === "" ? null : Number(grade),
          user_icon: iconUrl,
        },
      });

      const { error: dbErr } = await supabase
        .from("profiles")
        .upsert({
          id: userId,
          original_name: name,
          school_name: schoolName,
          grade: grade === "" ? null : Number(grade),
          user_icon: iconUrl,
          profile_completed: true,
          completed_at: new Date().toISOString(),
        }, { onConflict: "id" });
      if (dbErr) throw dbErr;

      setMsg("本登録が完了しました。ホームへ移動します。");
      setTimeout(() => navigate("/"), 600);
    } catch (e: unknown) {
      console.error(e);
      if (typeof e === "object" && e !== null && "message" in e) {
        setErr((e as { message?: string }).message ?? "保存に失敗しました");
      } else {
        setErr("保存に失敗しました");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] grid place-items-center p-6">
        <div className="rounded-lg border p-6 max-w-md w-full text-center">
          <p className="text-sm text-gray-700">読み込み中…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">本登録（プロフィール設定）</h1>

      {msg && <p className="mb-3 rounded-md bg-green-50 border border-green-200 px-3 py-2 text-sm">{msg}</p>}
      {err && <p className="mb-3 rounded-md bg-red-50 border border-red-200 px-3 py-2 text-sm">{err}</p>}

      <form onSubmit={handleSubmit} className="space-y-4" aria-label="本登録フォーム">
        <div className="space-y-1">
          <label className="block text-sm font-medium">名前</label>
          <input
            type="text"
            className="w-full rounded-md border px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={saving}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">学校名</label>
          <input
            type="text"
            className="w-full rounded-md border px-3 py-2"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
            disabled={saving}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">学年（数値）</label>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            className="w-full rounded-md border px-3 py-2"
            value={grade}
            onChange={(e) => setGrade(e.target.value === "" ? "" : Number(e.target.value))}
            required
            disabled={saving}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium">ユーザーアイコン（任意 / 正方形推奨）</label>
          <input
            type="file"
            accept="image/*"
            onChange={onPickIcon}
            disabled={saving}
          />
          {iconPreview && (
            <img
              src={iconPreview}
              alt="preview"
              className="mt-2 h-24 w-24 rounded-full object-cover border"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 text-white py-2 font-medium disabled:opacity-60"
          disabled={saving}
        >
          {saving ? "保存中…" : "この内容で登録する"}
        </button>
      </form>
    </div>
  );
}

export default Setup;