interface Item {
  item_id: number;
  item_name: string;
  item_detail: string;
  item_img: string;
  sold_flag: boolean;
  created_at: string;
  updated_at: string;
  bought_at?: string;
  item_price?: number;
}

interface CategoryItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface CategoryList {
  id: string;
  name: string;
  items: CategoryItem[];
}

export type { Item, CategoryList, CategoryItem };
