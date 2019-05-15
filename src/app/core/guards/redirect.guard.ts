import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token === 'ok') {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
