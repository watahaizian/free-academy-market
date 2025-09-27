export interface Product {
  id: string
  title: string
  description: string
  price: number
  category: string
  imageUrl: string
  seller: {
    id: string
    name: string
    avatar: string
  }
  createdAt: string
  isSold: boolean
}

export const mockProducts: Product[] = [
  // 教科書カテゴリ
  {
    id: '1',
    title: '微積分の教科書（第3版）',
    description: '数学科の必修科目で使用した教科書です。書き込みはほとんどなく、きれいな状態です。',
    price: 2500,
    category: '教科書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user1',
      name: '田中太郎',
      avatar: '田'
    },
    createdAt: '2024-01-15T10:30:00Z',
    isSold: false
  },
  {
    id: '7',
    title: '線形代数入門',
    description: '工学部で使用した線形代数の教科書。練習問題の解答も付いています。',
    price: 3200,
    category: '教科書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user7',
      name: '中村和也',
      avatar: '中'
    },
    createdAt: '2024-01-14T08:15:00Z',
    isSold: false
  },
  {
    id: '8',
    title: '物理学基礎（力学・熱力学）',
    description: '理学部物理学科の教科書。図表が豊富で理解しやすいです。',
    price: 2800,
    category: '教科書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user8',
      name: '小林さくら',
      avatar: '小'
    },
    createdAt: '2024-01-13T14:20:00Z',
    isSold: false
  },
  {
    id: '9',
    title: '有機化学の基礎',
    description: '薬学部で使用した有機化学の教科書。反応機構が詳しく説明されています。',
    price: 3500,
    category: '教科書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user9',
      name: '加藤大輔',
      avatar: '加'
    },
    createdAt: '2024-01-12T11:45:00Z',
    isSold: true
  },
  {
    id: '10',
    title: '経済学入門',
    description: '経済学部の入門教科書。マクロ・ミクロ経済学の基礎を学べます。',
    price: 2200,
    category: '教科書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user10',
      name: '吉田麻衣',
      avatar: '吉'
    },
    createdAt: '2024-01-11T16:30:00Z',
    isSold: false
  },

  // PC・電子機器カテゴリ
  {
    id: '2',
    title: 'MacBook Air 13インチ',
    description: 'M1チップ搭載のMacBook Airです。プログラミング学習に最適。軽微な使用感はありますが、動作に問題はありません。',
    price: 85000,
    category: 'PC・電子機器',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    seller: {
      id: 'user2',
      name: '佐藤花子',
      avatar: '佐'
    },
    createdAt: '2024-01-14T15:20:00Z',
    isSold: false
  },
  {
    id: '11',
    title: 'iPad Air 第5世代',
    description: 'M1チップ搭載のiPad Air。ノート取りや動画視聴に最適。Apple Pencilも付属します。',
    price: 65000,
    category: 'PC・電子機器',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    seller: {
      id: 'user11',
      name: '松本優香',
      avatar: '松'
    },
    createdAt: '2024-01-13T09:30:00Z',
    isSold: false
  },
  {
    id: '12',
    title: 'AirPods Pro 第2世代',
    description: 'ノイズキャンセリング機能付きのAirPods Pro。充電ケースも付いています。',
    price: 28000,
    category: 'PC・電子機器',
    imageUrl: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop',
    seller: {
      id: 'user12',
      name: '石川健太',
      avatar: '石'
    },
    createdAt: '2024-01-12T13:15:00Z',
    isSold: false
  },
  {
    id: '13',
    title: 'Dell XPS 13',
    description: 'Windows 11搭載のDell XPS 13。軽量で持ち運びに便利。プログラミングに最適。',
    price: 120000,
    category: 'PC・電子機器',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    seller: {
      id: 'user13',
      name: '渡辺美咲',
      avatar: '渡'
    },
    createdAt: '2024-01-11T10:45:00Z',
    isSold: false
  },
  {
    id: '14',
    title: 'Nintendo Switch',
    description: 'Nintendo Switch本体。ジョイコン2本とドックが付属。ゲーム数本も一緒にお譲りします。',
    price: 25000,
    category: 'PC・電子機器',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop',
    seller: {
      id: 'user14',
      name: '森田拓也',
      avatar: '森'
    },
    createdAt: '2024-01-10T17:20:00Z',
    isSold: true
  },

  // 家具・インテリアカテゴリ
  {
    id: '3',
    title: 'デスクライト（LED）',
    description: '勉強用のLEDデスクライトです。明るさ調整可能で、目に優しい設計です。',
    price: 3500,
    category: '家具・インテリア',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    seller: {
      id: 'user3',
      name: '山田次郎',
      avatar: '山'
    },
    createdAt: '2024-01-13T09:15:00Z',
    isSold: true
  },
  {
    id: '15',
    title: '学習デスク（幅120cm）',
    description: 'シンプルな学習デスク。引き出し付きで収納力も抜群。組み立て済みです。',
    price: 15000,
    category: '家具・インテリア',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    seller: {
      id: 'user15',
      name: '岡田智子',
      avatar: '岡'
    },
    createdAt: '2024-01-12T14:30:00Z',
    isSold: false
  },
  {
    id: '16',
    title: 'オフィスチェア',
    description: '長時間の勉強でも疲れにくいオフィスチェア。高さ調整可能。',
    price: 12000,
    category: '家具・インテリア',
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop',
    seller: {
      id: 'user16',
      name: '清水健一',
      avatar: '清'
    },
    createdAt: '2024-01-11T11:20:00Z',
    isSold: false
  },
  {
    id: '17',
    title: '本棚（5段）',
    description: '教科書や参考書を整理できる5段の本棚。組み立て式で持ち運びも可能。',
    price: 8000,
    category: '家具・インテリア',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    seller: {
      id: 'user17',
      name: '田村由美',
      avatar: '田'
    },
    createdAt: '2024-01-10T15:45:00Z',
    isSold: false
  },
  {
    id: '18',
    title: 'ミニ冷蔵庫',
    description: '一人暮らしに最適なミニ冷蔵庫。飲み物やお弁当の保存に便利。',
    price: 18000,
    category: '家具・インテリア',
    imageUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop',
    seller: {
      id: 'user18',
      name: '木村さくら',
      avatar: '木'
    },
    createdAt: '2024-01-09T12:10:00Z',
    isSold: false
  },

  // 参考書カテゴリ
  {
    id: '4',
    title: '英語の参考書セット',
    description: 'TOEIC対策用の参考書3冊セットです。問題集も含まれており、効率的に学習できます。',
    price: 1800,
    category: '参考書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user4',
      name: '鈴木美咲',
      avatar: '鈴'
    },
    createdAt: '2024-01-12T14:45:00Z',
    isSold: false
  },
  {
    id: '19',
    title: '公務員試験対策問題集',
    description: '国家公務員試験対策の問題集。過去問と解説が充実しています。',
    price: 2500,
    category: '参考書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user19',
      name: '青木健太',
      avatar: '青'
    },
    createdAt: '2024-01-11T16:20:00Z',
    isSold: false
  },
  {
    id: '20',
    title: '簿記2級テキスト',
    description: '日商簿記2級のテキストと問題集。合格に必要な知識が網羅されています。',
    price: 3200,
    category: '参考書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user20',
      name: '福田麻衣',
      avatar: '福'
    },
    createdAt: '2024-01-10T13:30:00Z',
    isSold: false
  },
  {
    id: '21',
    title: 'プログラミング入門書',
    description: 'Python入門の参考書。初心者でもわかりやすく説明されています。',
    price: 2800,
    category: '参考書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user21',
      name: '西村拓也',
      avatar: '西'
    },
    createdAt: '2024-01-09T10:15:00Z',
    isSold: false
  },
  {
    id: '22',
    title: '大学院入試対策書',
    description: '大学院入試の英語と専門科目の対策書。志望校別の対策も含まれています。',
    price: 3500,
    category: '参考書',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    seller: {
      id: 'user22',
      name: '原田智子',
      avatar: '原'
    },
    createdAt: '2024-01-08T14:45:00Z',
    isSold: true
  },

  // 自転車カテゴリ
  {
    id: '5',
    title: '自転車（ママチャリ）',
    description: '通学用のママチャリです。チェーンやブレーキは最近交換済みで、快適に乗れます。',
    price: 12000,
    category: '自転車',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user5',
      name: '高橋健一',
      avatar: '高'
    },
    createdAt: '2024-01-11T11:30:00Z',
    isSold: false
  },
  {
    id: '23',
    title: 'ロードバイク（26インチ）',
    description: '軽量なロードバイク。通学やサイクリングに最適。ヘルメットも付属します。',
    price: 35000,
    category: '自転車',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user23',
      name: '村上由美',
      avatar: '村'
    },
    createdAt: '2024-01-10T09:20:00Z',
    isSold: false
  },
  {
    id: '24',
    title: '電動自転車',
    description: 'バッテリー式の電動自転車。坂道も楽々。バッテリーは最近交換済みです。',
    price: 45000,
    category: '自転車',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user24',
      name: '川口さくら',
      avatar: '川'
    },
    createdAt: '2024-01-09T15:30:00Z',
    isSold: false
  },
  {
    id: '25',
    title: '折りたたみ自転車',
    description: 'コンパクトな折りたたみ自転車。アパートの収納にも便利。',
    price: 28000,
    category: '自転車',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user25',
      name: '林健太',
      avatar: '林'
    },
    createdAt: '2024-01-08T12:15:00Z',
    isSold: false
  },

  // 家電カテゴリ
  {
    id: '6',
    title: 'コーヒーメーカー',
    description: 'ドリップ式のコーヒーメーカーです。朝のコーヒータイムに最適。',
    price: 4500,
    category: '家電',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    seller: {
      id: 'user6',
      name: '伊藤由美',
      avatar: '伊'
    },
    createdAt: '2024-01-10T16:20:00Z',
    isSold: false
  },
  {
    id: '26',
    title: '電子レンジ（20L）',
    description: '一人暮らしに最適な電子レンジ。温め機能と解凍機能付き。',
    price: 12000,
    category: '家電',
    imageUrl: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop',
    seller: {
      id: 'user26',
      name: '斎藤麻衣',
      avatar: '斎'
    },
    createdAt: '2024-01-09T11:45:00Z',
    isSold: false
  },
  {
    id: '27',
    title: '掃除機（コードレス）',
    description: '軽量なコードレス掃除機。アパートの掃除に最適。充電式で便利。',
    price: 15000,
    category: '家電',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user27',
      name: '江藤拓也',
      avatar: '江'
    },
    createdAt: '2024-01-08T14:20:00Z',
    isSold: false
  },
  {
    id: '28',
    title: '加湿器（超音波式）',
    description: '静音設計の加湿器。冬の乾燥対策に最適。タンク容量も大きめです。',
    price: 8000,
    category: '家電',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user28',
      name: '大野智子',
      avatar: '大'
    },
    createdAt: '2024-01-07T16:30:00Z',
    isSold: false
  },
  {
    id: '29',
    title: '炊飯器（3合）',
    description: '一人暮らしに最適な3合炊飯器。保温機能付きで美味しいご飯が炊けます。',
    price: 6000,
    category: '家電',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user29',
      name: '小川さくら',
      avatar: '小'
    },
    createdAt: '2024-01-06T13:15:00Z',
    isSold: true
  },

  // その他カテゴリ
  {
    id: '30',
    title: '楽器（ギター）',
    description: 'アコースティックギター。初心者向けで弾きやすいです。チューナーも付属。',
    price: 25000,
    category: 'その他',
    imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop',
    seller: {
      id: 'user30',
      name: '野口健一',
      avatar: '野'
    },
    createdAt: '2024-01-05T10:20:00Z',
    isSold: false
  },
  {
    id: '31',
    title: 'スポーツ用品（テニスラケット）',
    description: 'テニスラケットとボールセット。テニスサークルで使用していました。',
    price: 8000,
    category: 'その他',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    seller: {
      id: 'user31',
      name: '三浦由美',
      avatar: '三'
    },
    createdAt: '2024-01-04T15:45:00Z',
    isSold: false
  },
  {
    id: '32',
    title: 'アウトドア用品（テント）',
    description: '2人用のテント。キャンプやアウトドア活動に最適。軽量で持ち運びやすい。',
    price: 18000,
    category: 'その他',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user32',
      name: '松井麻衣',
      avatar: '松'
    },
    createdAt: '2024-01-03T12:30:00Z',
    isSold: false
  },
  {
    id: '33',
    title: '文房具セット',
    description: '大学で使用していた文房具のセット。ペン、ノート、ファイルなど多数。',
    price: 1500,
    category: 'その他',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    seller: {
      id: 'user33',
      name: '井上拓也',
      avatar: '井'
    },
    createdAt: '2024-01-02T09:15:00Z',
    isSold: false
  },
  {
    id: '34',
    title: 'カメラ（デジタル一眼）',
    description: '中古のデジタル一眼レフカメラ。レンズ2本とメモリーカード付き。',
    price: 45000,
    category: 'その他',
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    seller: {
      id: 'user34',
      name: '藤田智子',
      avatar: '藤'
    },
    createdAt: '2024-01-01T14:20:00Z',
    isSold: false
  }
]

export const categories = [
  'すべて',
  '教科書',
  '参考書',
  'PC・電子機器',
  '家具・インテリア',
  '自転車',
  '家電',
  'その他'
]