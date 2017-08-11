import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratKeduaComponent } from './surat-kedua.component';

describe('SuratKeduaComponent', () => {
  let component: SuratKeduaComponent;
  let fixture: ComponentFixture<SuratKeduaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuratKeduaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratKeduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
