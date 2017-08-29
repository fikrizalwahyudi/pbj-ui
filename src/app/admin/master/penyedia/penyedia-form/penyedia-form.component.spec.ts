import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PenyediaFormComponent } from './penyedia-form.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../../../share/share.module';
import { FormsModule } from '@angular/forms';
import { Http, BaseRequestOptions } from '@angular/http';

describe('PenyediaFormComponent', () => {
  let component: PenyediaFormComponent;
  let fixture: ComponentFixture<PenyediaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenyediaFormComponent ],
      imports: [
        ShareModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: Http, useFactory:(backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyediaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
