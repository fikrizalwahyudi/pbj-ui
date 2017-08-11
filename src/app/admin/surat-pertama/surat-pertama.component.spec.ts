import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratPertamaComponent } from './surat-pertama.component';

describe('SuratPertamaComponent', () => {
  let component: SuratPertamaComponent;
  let fixture: ComponentFixture<SuratPertamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuratPertamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratPertamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
