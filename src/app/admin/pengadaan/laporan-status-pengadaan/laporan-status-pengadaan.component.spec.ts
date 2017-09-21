import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanStatusPengadaanComponent } from './laporan-status-pengadaan.component';

describe('LaporanStatusPengadaanComponent', () => {
  let component: LaporanStatusPengadaanComponent;
  let fixture: ComponentFixture<LaporanStatusPengadaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporanStatusPengadaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanStatusPengadaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
