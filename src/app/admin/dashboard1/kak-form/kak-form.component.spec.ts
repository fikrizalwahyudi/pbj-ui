import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakFormComponent } from './kak-form.component';

describe('KakFormComponent', () => {
  let component: KakFormComponent;
  let fixture: ComponentFixture<KakFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
