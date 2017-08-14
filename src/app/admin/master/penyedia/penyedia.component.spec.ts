import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaComponent } from './penyedia.component';

describe('PenyediaComponent', () => {
  let component: PenyediaComponent;
  let fixture: ComponentFixture<PenyediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenyediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
