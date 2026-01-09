
export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ValuePromise {
  title: string;
  items: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
