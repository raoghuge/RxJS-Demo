import { Component, OnInit } from '@angular/core';
import { Subject, Observable, timer, interval } from 'rxjs';
import { debounceTime, distinctUntilChanged, concatMap, map, delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent implements OnInit {

  randomNumber: number;
  myNumber$ = new Subject<number>();
  numbers: number[] = [];
  constructor() { }

  ngOnInit(): void {

 
    const delayedClicks = this.getNumber().subscribe(x => {
      this.randomNumber = x;
    });    
    interval(3000).subscribe(tick => {
      if(!this.numbers.includes(this.randomNumber)) {
        this.numbers.push(this.randomNumber);
      }
    });
 
  }

  getNumber(): Observable<number> {
    let t = timer(0, 500);
    t.subscribe(v => {
      this.myNumber$.next(Math.round(1000 * Math.random()));
    })
    return this.myNumber$;
  }

}
