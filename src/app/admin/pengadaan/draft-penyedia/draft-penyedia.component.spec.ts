import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPenyediaComponent } from './draft-penyedia.component';

describe('DraftPenyediaComponent', () => {
  let component: DraftPenyediaComponent;
  let fixture: ComponentFixture<DraftPenyediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftPenyediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftPenyediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
