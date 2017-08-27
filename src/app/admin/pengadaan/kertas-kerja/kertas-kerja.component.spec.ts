import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KertasKerjaComponent } from './kertas-kerja.component';

describe('KertasKerjaComponent', () => {
  let component: KertasKerjaComponent;
  let fixture: ComponentFixture<KertasKerjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KertasKerjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KertasKerjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
