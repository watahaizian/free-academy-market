import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';

type Suggestion = {
  item_id: number;
  item_name: string;
};

export default function SearchBar() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

useEffect(() => {
  const q = query.trim()
  if (q.length === 0){
    setSuggestions([]);
    return;
  }
  
const t = setTimeout(async () => {
  const { data, error } = await supabase
  .from('items')
  .select('item_id, item_name')
  .or(`item_name.ilike.%${q}%,item_detail.ilike.%${q}%`)
  .limit(5);

  if (!error) setSuggestions(data || []);
}, 250);
  
return () => clearTimeout(t);
}, [query]);

const goSearch = (text: string) => {
  const q = text.trim();
  setOpen(false);
  if (!q) { 
    navigate("/");
    return;
  }
  navigate(`/?q=${encodeURIComponent(q)}`);
};

  return (
    <div className="flex-1 relative">
      <Search className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-10 w-8 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter'){
            goSearch(query);
          }else if (e.key === 'Escape'){
            setOpen(false);
          }
        }}
        placeholder="商品を検索..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500"
      />
      

      {open && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md w-full">
          {suggestions.map((s) => (
            <li 
              key={s.item_id} 
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => goSearch(s.item_name)}  
            >
              {s.item_name}
            </li>
          ))}
        </ul>
      )}
        
    </div>
  );
}
