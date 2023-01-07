import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../Services/account.service";

@Injectable()

export class LoginGuard implements CanActivate {
     constructor(private accountservice: AccountService, private router: Router) { }
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
          let logged = this.accountservice.isLoggedIn();

          if (logged) {
               return true;
          }
          this.router.navigate(["login"]);
          return false;
     }


}