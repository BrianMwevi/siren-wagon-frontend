import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  trips: any = [];

  constructor(private tripservice: TripService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripservice.getTrip().subscribe((data) => {
      this.trips = data;
      console.log(data)
    });
  }
}
