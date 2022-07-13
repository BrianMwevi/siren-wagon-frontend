import { Ambulance } from './Ambulance';
import { User } from './User';
export interface Driver {
  id?: number;
  user?: User;
  id_number?: string;
  driving_license?: string;
  ambulance?: Ambulance;
  updated_date?: any;
  picture?: string;
  
}
