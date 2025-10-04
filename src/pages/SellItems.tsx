import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useState, useEffect } from 'react';
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
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated || !user) {
      setError('ログインしてください');
    } else {
      setError('');
    }
  }, [isAuthenticated, user]);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
  if (error) {
    setError('');
  }
};

const validateForm = () => {
  if (!formData.item_name.trim()) {
    setError('商品名を入力してください');
    return false;
  }
  if (!formData.item_detail.trim()) {
    setError('商品説明を入力してください');
    return false;
  }
  if (!formData.item_price || parseFloat(formData.item_price.toString()) <= 0) {
    setError('正しい価格を入力してください');
    return false;
  }
  return true;
};


const resetForm = () => {
  setFormData({
    item_name: '',
    item_detail: '',
    item_price: 0.0,
    user_id: '',
  });
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

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
    resetForm();
    setError('');
  } catch (error) {
    console.error('商品の追加に失敗しました', error);
    setError('商品の追加に失敗しました');
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
      {error && (
        <div className="text-red-500 mt-2 mb-2">
          {error}
        </div>
      )}
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
