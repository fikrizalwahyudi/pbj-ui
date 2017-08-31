/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';
import { LoginModule } from './login/login.module';

import { APP_BASE_HREF } from '@angular/common';

describe('App: Angular2AdminLTE', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				FormsModule,
				AdminModule,
				AppRoutingModule,
				ShareModule,
				LoginModule
			],
			providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
		});
	});

	it('should create the app', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it(`should have as title 'app works!'`, async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('app works!');
	}));

	/*it('should render title in a h1 tag', async(() => {
	  let fixture = TestBed.createComponent(AppComponent);
	  fixture.detectChanges();
	  let compiled = fixture.debugElement.nativeElement;
	  expect(compiled.querySelector('h1').textContent).toContain('app works!');
	}));*/
});
