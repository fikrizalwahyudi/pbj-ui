import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaFormComponent } from './penyedia-form.component';

describe('PenyediaFormComponent', () => {
  let component: PenyediaFormComponent;
  let fixture: ComponentFixture<PenyediaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenyediaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyediaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
