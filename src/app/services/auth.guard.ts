import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { users } from '../user';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser') as string);
    if (loggedInUser) {
      // const userExist = users.find(user => user.email === loggedInUser.email && user.password === loggedInUser.password);
      if ( loggedInUser?.role === 'admin') {
        return true;
      } else {
        this.router.navigate(['/userpage']);
        return false;
      }
    } else {

      return this.router.navigate(['']);
    }

  }

}

