import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';


function SoldItem() {
  const navigate = useNavigate();
  const { user ,isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    item_name: '',
    item_detail: '',
    item_price: 0,
    user_id: '',
  });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async () => {


  try {
    const { data, error } = await supabase.from('items').insert({
      item_name: formData.item_name,
      item_detail: formData.item_detail,
      item_price: formData.item_price,
      user_id: user?.id,
    });
    if (error) {
      throw error;
    }
    console.log('商品を追加しました', data);
    alert('商品を追加しました');
  } catch (error) {
    console.error('商品の追加に失敗しました', error);
    alert('商品の追加に失敗しました');
  }
};

  return (
    <div>
      <h1>出品一覧</h1>
      <div>
        <input type="text" name="item_name" value={formData.item_name} onChange={handleInputChange} placeholder="商品名" />
        <input type="text" name="item_detail" value={formData.item_detail} onChange={handleInputChange} placeholder="商品説明" />
        <input type="number" name="item_price" value={formData.item_price} onChange={handleInputChange} placeholder="価格" />
      </div>
      <button
        className="bg-green-500 text-white p-2 mr-2"
        onClick={handleSubmit}
      >
        出品する
      </button>
      <button
        className="bg-blue-500 text-white p-2 mr-2"
        onClick={() => navigate('/')}
      >
        Homeページ
      </button>
    </div>
  );
}

export default SoldItem;
