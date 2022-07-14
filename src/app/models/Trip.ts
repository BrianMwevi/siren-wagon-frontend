import { Hospital } from "./Hospital";
export interface Trip {
  id: number;
  pickup: string;
  destination: Hospital;
  persons: number;
  fee: number;
  start: any;
  end: any;
  trip_date: any;
  completed: any;
}
