import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app1'; 
  
  url: string = "http://localhost:4100/";
  urlSafe: SafeResourceUrl;
  isLogged: boolean;

  constructor(public sanitizer: DomSanitizer) {     
    this.urlSafe = '';    
    this.isLogged = false;
  }

  ngOnInit() {
    this.isLogged = false;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    window.addEventListener("message", this.initIsLogged, false);
    this.isLoggedIn();
  }

  initIsLogged(event: MessageEvent<any>) {    
    if (event.data)       
      this.isLogged = true;      
    else 
      this.isLogged = false;
    console.log('user logged : ' + this.isLogged);
  }
 
  isLoggedIn() {
    const iFrame: HTMLIFrameElement = document.getElementById('loginPage') as HTMLIFrameElement;
    const contentWindow = (<HTMLIFrameElement> iFrame).contentWindow;    
    
    if (contentWindow) {     
      contentWindow.postMessage('isLoggedInListenner', '*');      
    }        
  } 
}
