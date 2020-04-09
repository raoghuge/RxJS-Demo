import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateListenerComponent } from './state-listener.component';

describe('StateListenerComponent', () => {
  let component: StateListenerComponent;
  let fixture: ComponentFixture<StateListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
