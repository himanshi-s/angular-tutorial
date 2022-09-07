import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() {
    const colors = ['red', 'green', 'blue', 'pink'];
    this.btncolor= colors[Math.floor(Math.random()*4)];

    setTimeout(() => {
      this.isDisabled=true;
    }, 3000);
   }

  ngOnInit(): void {
  }

  name ="ram";
  age = 20;
  status = "coder";
  btncolor : string;
  isDisabled = false;
}
