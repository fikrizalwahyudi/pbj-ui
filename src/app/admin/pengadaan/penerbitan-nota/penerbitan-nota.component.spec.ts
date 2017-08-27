import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenerbitanNotaComponent } from './penerbitan-nota.component';

describe('PenerbitanNotaComponent', () => {
  let component: PenerbitanNotaComponent;
  let fixture: ComponentFixture<PenerbitanNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenerbitanNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenerbitanNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
