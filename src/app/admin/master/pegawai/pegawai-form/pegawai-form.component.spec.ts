import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiFormComponent } from './pegawai-form.component';

describe('PegawaiFormComponent', () => {
  let component: PegawaiFormComponent;
  let fixture: ComponentFixture<PegawaiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
