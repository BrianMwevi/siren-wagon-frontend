import { User } from './User';
import { Trip } from './Trip';
import { Review } from './Review';
import { Profile } from './Profile';

export interface Ambulance {
  id?: string;
  driver: User;
  doctor: User;
  phone: number;
  insurance: number;
  number_plate: string;
  available: boolean;
  in_transit: boolean;
  trips: Trip[];
  ratings: Review[];
  patients: Profile[];
}
