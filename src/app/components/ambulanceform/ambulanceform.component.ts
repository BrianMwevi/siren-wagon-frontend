import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ambulanceform',
  templateUrl: './ambulanceform.component.html',
  styleUrls: ['./ambulanceform.component.css']
})
export class AmbulanceformComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onAmbulanceCreate(ambulances: { driver: string, plate_number: string, available: string }) {
    console.log(ambulances)
    this.http.post('https://siren-wagon.herokuapp.com/api/ambulances.json', ambulances)
      .subscribe((response) => {
        console.log(response);
       });
  }

}
