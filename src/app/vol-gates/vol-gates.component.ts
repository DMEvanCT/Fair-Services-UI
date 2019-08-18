import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-vol-gates',
  templateUrl: './vol-gates.component.html',
  styleUrls: ['./vol-gates.component.css']
})
export class VolGatesComponent implements OnInit {
  location: string;
  seats: number;
  gatename: string;
  gate: [];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  createGate(gtes: Gates): Observable<any> {
    this.location = gtes.gateLocation;
    this.gatename = gtes.gateName;
    this.seats = this.seats;
    return this.http.post('http://127.0.0.1:8080/api/gates/creategate', gtes)
  }
}

