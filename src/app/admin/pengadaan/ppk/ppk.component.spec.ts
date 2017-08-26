import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpkComponent } from './ppk.component';

describe('PpkComponent', () => {
  let component: PpkComponent;
  let fixture: ComponentFixture<PpkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
