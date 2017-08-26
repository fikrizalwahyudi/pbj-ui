import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinjauTeknisComponent } from './tinjau-teknis.component';

describe('TinjauTeknisComponent', () => {
  let component: TinjauTeknisComponent;
  let fixture: ComponentFixture<TinjauTeknisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinjauTeknisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinjauTeknisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
