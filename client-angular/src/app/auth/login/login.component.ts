import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('first') firstField!: ElementRef;

  loginForm = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('',{
      validators: Validators.required
    })
  })

  ngAfterViewInit(): void {
    this.firstField.nativeElement.focus();
  }

  validateData(): boolean {
    if (!this.loginForm.valid) {
      return false;
    }
/*     const password = this.loginForm.get('password');
    const retypePassword = this.loginForm.get('retypePassword');

    if (
      !password ||
      !retypePassword ||
      password.value !== retypePassword.value
    ) {
      return false;
    } */
    return true;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    
    /* console.log(this.validateData()); */

    if (!this.loginForm.valid) {
     
      console.log(this.loginForm.valid);

      return;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
