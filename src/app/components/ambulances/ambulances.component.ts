import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Ambulances } from 'src/app/model/ambulances';
import { AmbulanceService } from 'src/app/services/ambulance.service';

@Component({
  selector: 'app-ambulances',
  templateUrl: './ambulances.component.html',
  styleUrls: ['./ambulances.component.css'],
})
export class AmbulancesComponent implements OnInit {
  allAmbulances: Ambulances[] = [];

  constructor(
    private http: HttpClient,
    private ambulanceService: AmbulanceService,
  ) {}

  ngOnInit(): void {
    this.getAmbulances();
  }

  private getAmbulances() {
    this.ambulanceService.fetchAmbulances().subscribe((ambulances) => {
      console.log(ambulances);
      this.allAmbulances = ambulances;
    });
  }

  // private getAmbulances() {
  //   this.http
  //     .get<{ [key: string]: Ambulances }>(
  //       'https://siren-wagon.herokuapp.com/api/ambulances.json'
  //     )
  //     .pipe(
  //       map((res) => {
  //         const ambulances = [];
  //         for (const key in res) {
  //           if (res.hasOwnProperty(key)) {
  //             ambulances.push({ ...res[key], id: key });
  //           }
  //         }
  //         return ambulances;
  //       })
  //     )
  //     .subscribe((ambulances) => {
  //       console.log(ambulances);
  //       this.allAmbulances = ambulances;
  //     });
  // }
}
