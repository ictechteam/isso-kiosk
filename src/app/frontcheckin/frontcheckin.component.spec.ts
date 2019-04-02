import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontcheckinComponent } from './frontcheckin.component';

describe('FrontcheckinComponent', () => {
  let component: FrontcheckinComponent;
  let fixture: ComponentFixture<FrontcheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontcheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
