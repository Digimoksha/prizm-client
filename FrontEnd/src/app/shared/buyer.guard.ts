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
export class BuyerGuard {
  constructor(public authService: MemberService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isBuyer !== true) {
      window.alert('This is not Buyer Access !');
      this.router.navigate(['login']);
    }
    return true;
  }
}
