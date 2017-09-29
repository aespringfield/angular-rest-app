import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Subscriber {
  name: string;
  email: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.login = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  logUserIn({value, valid}: {value: Subscriber, valid: boolean}) {
    if (valid) {
      console.log('value', value, 'valid', valid);
    }
    this.reset();
  }

  reset() {
    this.login.reset({
      userName: '',
      password: ''
    });
  }
}
