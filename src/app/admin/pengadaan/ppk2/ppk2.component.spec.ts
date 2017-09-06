import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppk2Component } from './ppk2.component';

describe('Ppk2Component', () => {
  let component: Ppk2Component;
  let fixture: ComponentFixture<Ppk2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppk2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
