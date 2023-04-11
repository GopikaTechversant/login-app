import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor() { }
  canActivate():boolean{

  }
}
