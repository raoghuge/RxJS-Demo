import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pollingStatus: string = 'Not Polling';
  isLoggedIn = false;
  isUserLoggedIn: Observable<boolean>;
  
  constructor(public auth : AuthService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.getOnlineStatus();
    this.isUserLoggedIn.subscribe(v => {
      this.isLoggedIn = v;
  });
 
  this.auth.pollingStatus$.subscribe(v => {
    this.pollingStatus = v;
  })
  }

}
