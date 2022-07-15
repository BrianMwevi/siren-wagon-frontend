import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() patient: Profile;

  constructor() {}

  ngOnInit(): void {}
}
