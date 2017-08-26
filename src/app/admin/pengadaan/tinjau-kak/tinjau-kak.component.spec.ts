import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinjauKakComponent } from './tinjau-kak.component';

describe('TinjauKakComponent', () => {
  let component: TinjauKakComponent;
  let fixture: ComponentFixture<TinjauKakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinjauKakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinjauKakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
