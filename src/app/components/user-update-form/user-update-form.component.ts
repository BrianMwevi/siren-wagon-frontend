import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.css'],
})
export class UserUpdateFormComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit(): void {}

  onProfileUpdate(form: NgForm) {
    console.log(form.value);
  }
}
