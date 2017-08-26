import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengadaanFormComponent } from './pengadaan-form.component';

describe('PengadaanFormComponent', () => {
  let component: PengadaanFormComponent;
  let fixture: ComponentFixture<PengadaanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengadaanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengadaanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
