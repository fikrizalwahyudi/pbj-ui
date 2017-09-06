import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppk3Component } from './ppk3.component';

describe('Ppk3Component', () => {
  let component: Ppk3Component;
  let fixture: ComponentFixture<Ppk3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppk3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
