import { Hospital } from './Hospital';
import { User } from './User';

export interface Account {
  id: number;
  acount_holder?: User;
  hospital?: Hospital;
  account_number: number;
  balance: number;
  created_date: any;
  updated_date: any;
}
