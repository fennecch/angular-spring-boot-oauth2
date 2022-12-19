import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  onSubmit() {
    const OAUTH_CLIENT = 'justgivemeatoken';
    const OAUTH_SECRET = 'uJqRnKsEgIdRo8102';
    const API_URL = 'http://127.0.0.1:8080/';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
      })
    };

    const body = new HttpParams()
      .set('username', '' + this.loginForm.value.username)
      .set('password', '' + this.loginForm.value.password)
      .set('grant_type', 'password');

    this.http.post<any>(API_URL + 'oauth/token', body, HTTP_OPTIONS).subscribe((res:any) => {        
        localStorage.setItem('token', res.access_token)
        window.parent.postMessage(res.access_token, '*');
    });       
  }

}
