import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlessWindowComponent } from './qless-window.component';

describe('QlessWindowComponent', () => {
  let component: QlessWindowComponent;
  let fixture: ComponentFixture<QlessWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlessWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlessWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
