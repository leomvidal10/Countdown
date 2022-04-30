import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'countdown';

  days : string;
  hours : string;
  minutes : string;
  seconds : string;

  finalData: moment.Moment;

  ngOnInit(): void {
    this.finalData = moment("2250-05-05");

    timer(0, 1000).subscribe(() => {
      this.finalData = this.finalData.subtract(1, "seconds");
      this.getDates();
    });
  }

  getDates() {
    const subtractDate = moment(this.finalData.clone().unix()-moment.now());

    this.days = subtractDate.format("DD");
    this.hours = subtractDate.format("HH");
    this.minutes = subtractDate.format("mm");
    this.seconds = subtractDate.format("ss");
  }
}
