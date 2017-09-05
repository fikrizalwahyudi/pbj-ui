import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PphComponent } from './pph.component';

describe('PphComponent', () => {
  let component: PphComponent;
  let fixture: ComponentFixture<PphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
