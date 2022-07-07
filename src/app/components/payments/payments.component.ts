import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  trip: any = [];

  constructor(private tripservice: TripService) {}

  ngOnInit(): void {
    this.trips();

  }

  trips(): void {
    this.tripservice.getTrip().subscribe((data) => {
      this.trip=data
      console.log(this.trip)

    });
  }
}
