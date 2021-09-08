import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fGroup: FormGroup;
  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit() {
    this.fGroup = new FormGroup({
      userName: new FormControl('suvarna', [Validators.required]),
      password: new FormControl('suvarna123', [Validators.required])
    });
  }
  signIn() {
    // console.log(this.fGroup.value);
    if (this.authService.authLogin(this.fGroup.value)) {
      alert('login successfully');
      this.route.navigate(['home']);
    } else {
      alert('Please eneter correct username and password');
      this.route.navigate(['error']);
    }
  }

  reset() {
    console.log('reset the data');
  }
}
