import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  redirectToHomepage(){
    this.router.navigate(['home-component'])
  }
}
