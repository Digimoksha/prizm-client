import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from '../auth/member.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: MemberService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn !== true) {
      window.alert('Access not allowed!');
      this.router.navigate(['login']);
    }
    return true;
  }
}
