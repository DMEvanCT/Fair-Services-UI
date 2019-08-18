import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {UiService} from "../../shared/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;

  constructor(private authService: AuthService, private uiService: UiService) {}

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading
    })
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', { validators: [Validators.required]})
    });
  }


  onSubmit(form: NgForm) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });


    }

    ngOnDestroy() {
      this.loadingSubs.unsubscribe()
    }


}











