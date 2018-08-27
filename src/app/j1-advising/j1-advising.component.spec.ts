import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { J1AdvisingComponent } from './j1-advising.component';

describe('J1AdvisingComponent', () => {
  let component: J1AdvisingComponent;
  let fixture: ComponentFixture<J1AdvisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ J1AdvisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(J1AdvisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
