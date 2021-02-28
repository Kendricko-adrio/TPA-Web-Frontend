import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve => {
      this.userService.getAuthUser2().then(() => {
        this.userService.getAuthUser().subscribe(async data => {

          if (data.data.getAuthUser.role !== 'admin') {
            this.router.navigate(['/']);
          }

          resolve(true);
        });
        // console.log('ga masuk');
      }).catch(() => {
        // UserService.userAuth = null;
        this.router.navigate(['/']);
        resolve(false);
      });
    }));
  }

}
