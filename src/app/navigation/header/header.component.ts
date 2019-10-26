import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuthed: boolean;
  authSubsription: Subscription;
  siteTitle: string;
  volunteerArray = ['Admission Gates', 'IT Services', 'Information Booths'];


  constructor(private authService: AuthService) {
    this.siteTitle = 'Durham Fair Services';

  }

  ngOnInit() {
    this.authSubsription = this.authService.authChange.subscribe(authStatus => {
      this.isAuthed = authStatus;
    })
  }

  onSideNavToggle() {
    this.sidenavToggle.emit();
  }



  ngOnDestroy() {
    this.authSubsription.unsubscribe()
  }

  onLogout() {
    this.authService.logout()
  }


}
