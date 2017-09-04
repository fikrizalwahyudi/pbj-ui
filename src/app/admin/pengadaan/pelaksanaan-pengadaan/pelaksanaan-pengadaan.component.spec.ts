import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelaksanaanPengadaanComponent } from './pelaksanaan-pengadaan.component';

describe('PelaksanaanPengadaanComponent', () => {
  let component: PelaksanaanPengadaanComponent;
  let fixture: ComponentFixture<PelaksanaanPengadaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelaksanaanPengadaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelaksanaanPengadaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
