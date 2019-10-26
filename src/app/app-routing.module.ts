import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {EastereggsComponent} from './easteregg/easteregg.component';
import {VolGatesComponent} from './vol-gates/vol-gates.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "addgate", component: VolGatesComponent},
  {path: "login", component: LoginComponent},
  {path: "easter", component: EastereggsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
