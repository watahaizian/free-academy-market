interface Chat {
  chat_id: number;
  item_id: number;
  seller_user_id: string;
  buyer_user_id: string;
  //chat_message: string;
}

interface ChatHistory {
  history_id: number;
  chat_id: number;
  user_id: string;
  chat_msg: string;
  chat_created_at: string;
}

export type { Chat, ChatHistory };
