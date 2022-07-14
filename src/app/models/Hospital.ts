import { Ambulance } from './Ambulance';
import { Review } from './Review';
import { User } from './User';
import { Account } from './Account';

export interface Hospital {
  id: number;
  name: string;
  patients: User[];
  ambulances: Ambulance[];
  established_date: any;
  updated_date: any;
  doctors: User[];
  reviews: Review[];
  account: Account;
  phone: number;
}
