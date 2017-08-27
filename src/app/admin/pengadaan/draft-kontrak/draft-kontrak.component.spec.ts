import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftKontrakComponent } from './draft-kontrak.component';

describe('DraftKontrakComponent', () => {
  let component: DraftKontrakComponent;
  let fixture: ComponentFixture<DraftKontrakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftKontrakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftKontrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
