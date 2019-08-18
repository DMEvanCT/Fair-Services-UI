import {User} from "./user.model";
import {AuthData} from "./auth-data.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import {UiService} from "../shared/ui.service";

@Injectable()
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>()
  private  isAAuthenticated = false;



  constructor(private router: Router, private afAuth: AngularFireAuth, private uiService: UiService) {}

  registerUser(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password
    ).then(result => {
      this.uiService.loadingStateChanged.next(false);
      console.log(result)
    }).catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackbar(error.message, null, 3000);

    });

  }

  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(result => {
      this.uiService.loadingStateChanged.next(false);
      console.log(result)
    }).catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackbar(error.message, null, 3000);
    });

  }


  initAuthListner() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
    this.isAAuthenticated = true;
    this.authChange.next(true)
        this.router.navigate(['/welcome']);
      } else {
        this.afAuth.auth.signOut()
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAAuthenticated = false;
      }
    });
  }



  logout() {
    this.afAuth.auth.signOut();

  }



    isAuth() {
      return this.isAAuthenticated;
    }


}
