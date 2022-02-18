export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  plan: 'free' | 'premium'
}