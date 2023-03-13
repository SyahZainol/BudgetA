import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  username!: ElementRef;
  authenticationError = false;

  loginForm = new FormGroup({
    username: new FormControl('admin', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('admin', { nonNullable: true, validators: [Validators.required] }),
    rememberme: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
  })

  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {

  }

  // ngAfterViewInit(): void {
  //   this.username.nativeElement.focus();
  // }

  login() {    
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: (results: any) => {
        console.log("results", results);
        const token = results["id_token"];
        if (token) {
          localStorage.setItem('id_token', token)
          this.router.navigate(['dashboard']);
        }
        this.authenticationError = false;
        if (!this.router.getCurrentNavigation()) {
          // There were no routing during login (eg from navigationToStoredUrl)

        }
      },
      error: () => (this.authenticationError = true),
    })
  }
}
