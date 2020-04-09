import { Component, OnInit } from '@angular/core';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.scss']
})
export class StateManagementComponent implements OnInit {
 

  constructor(private stateService: StateServiceService) { }

  ngOnInit(): void {
  }

  incr() {
    this.stateService.increment();
  }
  decr() {
    this.stateService.decrement();    
  }

  message() {
    this.stateService.send('Random Message ' + (Math.round(10* Math.random())));
  }
  
}
