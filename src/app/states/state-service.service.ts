import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  state = {
    counter: 0,
    messages: []
  }

  private stateSubject: any;

  constructor() {
    this.stateSubject = new ReplaySubject<any>();
  }

  getState(): Observable<any> {
    return this.stateSubject;
  }


  increment() {
    this.state.counter = this.state.counter + 1;    
    this.stateSubject.next(this.state);
  }
  
  decrement() {
    this.state.counter = this.state.counter - 1;   
    this.stateSubject.next(this.state);
  }

  send(m) { 
      this.state.messages.push(m);   
      this.stateSubject.next(this.state);
  }
}
