import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeknisComponent } from './teknis.component';

describe('TeknisComponent', () => {
  let component: TeknisComponent;
  let fixture: ComponentFixture<TeknisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeknisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeknisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
