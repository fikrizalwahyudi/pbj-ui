import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaFormComponent } from './pengguna-form.component';

describe('PenggunaFormComponent', () => {
  let component: PenggunaFormComponent;
  let fixture: ComponentFixture<PenggunaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
