import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssoAdvisingComponent } from './isso-advising.component';

describe('IssoAdvisingComponent', () => {
  let component: IssoAdvisingComponent;
  let fixture: ComponentFixture<IssoAdvisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssoAdvisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssoAdvisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
