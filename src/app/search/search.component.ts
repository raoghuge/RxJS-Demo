import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';

import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchBox')
  input: ElementRef;

  results = [];

  people = [
    "Joe Thomas",
    "Joe Bucknor",
    "Stephan John",
    "Sarah Johnson",
    "Sarah Humberger",
    "Nisha Kothari",
    "Nishant Divekar",
    "Ross Taylor",
    "Roger Federrer",
    "Roger Ferguson"
  ]
  constructor() {

  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    var eventObservable = fromEvent(this.input.nativeElement, 'keyup');
    eventObservable.subscribe(e => {
      if (e['target'].value.length <= 2) {
        this.results = [];
      } else {
        this.results = this.results.filter((v) => v.startsWith(e['target'].value))
      }
    });

    const searchEvent = eventObservable.pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap((k) => of(...this.people.filter(v => v.startsWith(k)))));

    searchEvent.subscribe(val => {
      
      if (!this.results.includes(val)) {
        this.results.push(val);
      }
    })
  }
}
