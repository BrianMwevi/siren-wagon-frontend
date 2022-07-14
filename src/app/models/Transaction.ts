export interface Transaction {
  id?: string;
  receiver: number;
  username?: string;
  sender?: string;
  amount: number;
  transaction_type: string;
  transaction_date?: any;
  completed?: boolean;
}
