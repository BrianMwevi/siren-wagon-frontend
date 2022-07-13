import { User } from './User';
import { Emergency } from './Emergency';
import { Package } from './Package';
export interface Profile {
  id: number;
  user: User;
  first_name?: string;
  last_name?: string;
  id_number?: number;
  emergency_contacts?: Emergency[];
  package?: Package;
  medical_condition?: any;
  updated_date?: any;
  picture: string;
}


