import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../app/services/user.service';
import {AuthUser} from '../app/models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  user = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    // return new Promise((resolve, reject) => {
    //   this.userService.getAuthUser().subscribe(async data => {
    //     console.log('asdf');
    //     this.user = data.data.getAuthUser;
    //     console.log(this.user);
    //     if (this.user != null) {
    //       return resolve(false);
    //     }
    //     return resolve(true);
    //
    //   });
    // });
    return new Promise((resolve => {
      this.userService.getAuthUser2().then(() => {
        resolve(false);
        // console.log('ga masuk');
        this.router.navigate(['/']);
      }).catch(() => {
        resolve(true);
      });
    }));

    // this.userService.getAuthUser().subscribe(async data=>{
    //   this.user = data.data.getAuthUser
    //   console.log(this.user);
    //   if(this.user != null){
    //     this.router.navigate(['/']);
    //   }
    // });
    // if (this.user == null) {
    //   return true;
    //   console.log("non auth");
    // }
    // console.log("auth");
    // return false;
  }
}
