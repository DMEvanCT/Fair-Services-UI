import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  date: Date;
  dateyear: number;
  volunteerCount: number;
  vendorCount: number;
  sponsorCount: number;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    const date = new Date();
    this.dateyear = date.getFullYear();
    this.volunteerCount = 0;
    this.vendorCount = 100;
    this.sponsorCount = 10;
    let obs = this.http.get('https://api.github.com/users/DMEvanCT')
    obs.subscribe((response) => console.log(response));

  }

}
