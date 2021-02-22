import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class GetAuthGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve => {
      this.userService.getAuthUser2().then(() => {
        this.userService.getAuthUser().subscribe(async data => {
          UserService.userAuth = data.data.getAuthUser;
          console.log();
          resolve(true);
        });
        // console.log('ga masuk');
      }).catch(() => {
        UserService.userAuth = null;
        resolve(true);
      });
    }));
  }

}
