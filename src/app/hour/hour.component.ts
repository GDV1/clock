import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit {

  time = new Date();

  constructor() { }

  ngOnInit(): void {
   this.timerFunction();
  }

  timerFunction() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
