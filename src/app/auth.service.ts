import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, timer } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStatus$ = new ReplaySubject<boolean>();
  private polling$ = timer(0, 1000);
  private pollingObserver: any;
  public pollingStatus$ = new ReplaySubject<string>();
  public isLoggedIn = false;

  constructor() { }

  setLoggedIn(v) {
    this.isLoggedIn = v;
    this.loginStatus$.next(this.isLoggedIn);
    if (this.isLoggedIn === true) {
      this.pollingObserver = this.polling$.subscribe(v => {
        this.loginStatus$.next(true);
        this.pollingStatus$.next('Polling');
      });
    } else {
      this.pollingObserver.unsubscribe();
      this.pollingStatus$.next('Not Polling');
    }

  }

  getOnlineStatus(): Observable<boolean> {
    if (this.isLoggedIn) {
      this.loginStatus$.next(true);
    } else {
      this.loginStatus$.next(false);
    }
    return this.loginStatus$;
  }
}
