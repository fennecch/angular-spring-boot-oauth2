import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')    
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("form value : " + this.loginForm.value.username);
  }

}
