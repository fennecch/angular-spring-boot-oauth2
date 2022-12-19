import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logout() {
    localStorage.removeItem('token');
    window.parent.postMessage(localStorage.getItem('token'), '*'); 
  }

  isLoggedIn() {
    if (localStorage.getItem('token'))
      return true;
    return false;
  } 

  @HostListener('window:message', ['$event'])
  isLoggedInListenner(event: MessageEvent) {  
    console.log("app-login - token : " + localStorage.getItem('token'));  
    window.parent.postMessage(localStorage.getItem('token'), '*');        
  }
  
}
