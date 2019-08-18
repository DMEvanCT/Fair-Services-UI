import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-easteregg',
  templateUrl: './easteregg.component.html',
  styleUrls: ['./easteregg.component.css']
})
export class EastereggsComponent implements OnInit {
  userName: string;
  responce: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
      this.responce = response;
      console.log(response);
    });
  }

}
