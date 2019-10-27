import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


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
  fairname: string;
  volunteerops: any;
  username: [];


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    const date = new Date();
    this.dateyear = date.getFullYear();
    this.volunteerCount = 0;
    this.vendorCount = 100;
    this.sponsorCount = 10;
    this.fairname = 'Durham Fair';
    this.username = [];
    // tslint:disable-next-line:prefer-const

    this.volunteerops = [
      {
        Name: 'Gates',
        Desc: 'Volunteer to sell tickets at the gates',
        Perks: 'Get a free ticket and parking pass',
        Jobs: ['Cashier', 'Assistant Gate Manager']
      },
      {
        Name: 'Administrative Services',
        desc: 'Help setup the fair behind the schenes ',
        Perks: 'Get a free ticket and badge to enter and exit the fair and a free parking pass',
        Jobs: ['IT Services', 'Office Services', 'Printing', 'Ribbons and Trophies', 'Signs']
      },
    ];


    const obs = this.http.get('https://api.github.com/users/DMEvanCT')
    // @ts-ignore
    obs.subscribe((response) => this.username.push(response.login));

  }



}





