import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-xl">教科書</h1>
      <span className="flex items-center gap-2">
        <p className="text-sm text-blue-500">すべて見る</p>
        <ArrowRight size={16} />
      </span>
    </div>
  );
}
