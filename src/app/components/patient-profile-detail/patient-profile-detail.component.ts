import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-patient-profile-detail',
  templateUrl: './patient-profile-detail.component.html',
  styleUrls: ['./patient-profile-detail.component.css'],
})
export class PatientProfileDetailComponent implements OnInit {
  @Input() patients: Profile[];
  constructor() {}

  ngOnInit(): void {}
}
