import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunapsisWindowComponent } from './sunapsis-window.component';

describe('SunapsisWindowComponent', () => {
  let component: SunapsisWindowComponent;
  let fixture: ComponentFixture<SunapsisWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunapsisWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunapsisWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
