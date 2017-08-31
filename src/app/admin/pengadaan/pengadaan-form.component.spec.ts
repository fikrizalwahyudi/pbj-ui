import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengadaanFormComponent } from './pengadaan-form.component';
import { AdminComponent } from '../admin.component';
import { MainSideComponent } from '../main-side/main-side.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { ControlSidebarComponent } from '../control-sidebar/control-sidebar.component';
import { Dashboard1Component } from '../dashboard1/dashboard1.component';
import { SuratPertamaComponent } from '../surat-pertama/surat-pertama.component';
import { SuratKeduaComponent } from '../surat-kedua/surat-kedua.component';
import { PenggunaComponent } from '../master/pengguna/pengguna.component';
import { PegawaiComponent } from '../master/pegawai/pegawai.component';
import { PenyediaComponent } from '../master/penyedia/penyedia.component';
import { ProfileComponent } from '../profile/profile.component';
import { PenggunaFormComponent } from '../master/pengguna/pengguna-form/pengguna-form.component';
import { PegawaiFormComponent } from '../master/pegawai/pegawai-form/pegawai-form.component';
import { PenyediaFormComponent } from '../master/penyedia/penyedia-form/penyedia-form.component';
import { KakFormComponent } from './kak-form/kak-form.component';
import { KpaComponent } from './kpa/kpa.component';
import { PpkComponent } from './ppk/ppk.component';
import { TeknisComponent } from './teknis/teknis.component';
import { TinjauKakComponent } from './tinjau-kak/tinjau-kak.component';
import { TinjauTeknisComponent } from './tinjau-teknis/tinjau-teknis.component';
import { KertasKerjaComponent } from './kertas-kerja/kertas-kerja.component';
import { DraftKontrakComponent } from './draft-kontrak/draft-kontrak.component';
import { PenerbitanNotaComponent } from './penerbitan-nota/penerbitan-nota.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../admin-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('PengadaanFormComponent', () => {
	let component: PengadaanFormComponent;
	let fixture: ComponentFixture<PengadaanFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AdminComponent,
				MainSideComponent,
				MainHeaderComponent,
				FooterComponent,
				ControlSidebarComponent,
				Dashboard1Component,
				SuratPertamaComponent,
				SuratKeduaComponent,
				PenggunaComponent,
				PegawaiComponent,
				PenyediaComponent,
				ProfileComponent,
				PenggunaFormComponent,
				PegawaiFormComponent,
				PenyediaFormComponent,
				PengadaanFormComponent,
				KakFormComponent,
				KpaComponent,
				PpkComponent,
				TeknisComponent,
				TinjauKakComponent,
				TinjauTeknisComponent,
				KertasKerjaComponent,
				DraftKontrakComponent,
				PenerbitanNotaComponent
			],
			imports: [
				CommonModule,
				ShareModule,
				FormsModule,
				AdminRoutingModule,
				RouterTestingModule
			],
			providers: [
				{
					provide: Http, useFactory: (backend, options) => {
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
		fixture = TestBed.createComponent(PengadaanFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
