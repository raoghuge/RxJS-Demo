import { Component, OnInit, Input } from '@angular/core';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-state-listener',
  templateUrl: './state-listener.component.html',
  styleUrls: ['./state-listener.component.scss']
})
export class StateListenerComponent implements OnInit {

  @Input('info') info;
  state: any;

  constructor(public stateService: StateServiceService) { }

  ngOnInit(): void {

    this.stateService.getState().subscribe(info => {
      this.state = info;
    })
  }

}
