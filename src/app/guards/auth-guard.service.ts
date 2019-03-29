import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  private isAuthenticated: boolean = false;

  canActivate() {
    return this.isAuthenticated;
    // return false;
  }
}