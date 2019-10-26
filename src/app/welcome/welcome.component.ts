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
  VolunteerOps: string[];
  Vlength: number;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    const date = new Date();
    this.dateyear = date.getFullYear();
    this.volunteerCount = 0;
    this.vendorCount = 100;
    this.sponsorCount = 10;
    this.fairname = 'Durham Fair';
    this.VolunteerOps = ['Gates', 'Information Booths', 'Administrative Services', 'Grounds']
    let obs = this.http.get('https://api.github.com/users/DMEvanCT')
    obs.subscribe((response) => console.log(response));
    this.Vlength = this.ReturnVolOpCound(this.VolunteerOps);

  }

  ReturnVolOpCound(volops: string[]): number {
      this.Vlength = volops.length
      return this.Vlength;
  }

}
