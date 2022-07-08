import { User } from './User';

export interface Emergency {
  id:number;
  patient: User;
  first_name: string;
  last_name: string;
  email?: string;
  id_number: number;
  // picture: string;
  phone1: number;
  phone2?: number;
  phone3?: number;
  relationship: string;
}
