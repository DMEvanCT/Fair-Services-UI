import {Component, OnInit} from '@angular/core';
import { MaterialModule } from './material.module'
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService) {}
  title = 'Durham Fair Services';


  ngOnInit() {
    this.authService.initAuthListner()
  }

  toggleNavigation() {


  }
}

