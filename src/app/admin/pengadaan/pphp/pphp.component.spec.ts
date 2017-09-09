import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PphpComponent } from './pphp.component';

describe('PphpComponent', () => {
  let component: PphpComponent;
  let fixture: ComponentFixture<PphpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PphpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PphpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
