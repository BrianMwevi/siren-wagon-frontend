import { Ambulance } from './Ambulance';
import { Hospital } from './Hospital';

export interface Review {
  id: number;
  hospital: Hospital;
  ambulance: Ambulance;
  content: string;
  rating: number;
  created_date: any;
}
