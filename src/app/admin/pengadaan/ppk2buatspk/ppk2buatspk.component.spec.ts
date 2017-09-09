import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppk2buatspkComponent } from './ppk2buatspk.component';

describe('Ppk2buatspkComponent', () => {
  let component: Ppk2buatspkComponent;
  let fixture: ComponentFixture<Ppk2buatspkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ppk2buatspkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppk2buatspkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
