import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdpComponent } from './ldp.component';

describe('LdpComponent', () => {
  let component: LdpComponent;
  let fixture: ComponentFixture<LdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
