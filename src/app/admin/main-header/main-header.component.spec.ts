/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../admin-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminComponent } from '../admin.component';
import { MainSideComponent } from '../main-side/main-side.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
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
import { PengadaanFormComponent } from '../pengadaan/pengadaan-form.component';
import { KakFormComponent } from '../pengadaan/kak-form/kak-form.component';
import { KpaComponent } from '../pengadaan/kpa/kpa.component';
import { PpkComponent } from '../pengadaan/ppk/ppk.component';
import { TeknisComponent } from '../pengadaan/teknis/teknis.component';
import { TinjauKakComponent } from '../pengadaan/tinjau-kak/tinjau-kak.component';
import { TinjauTeknisComponent } from '../pengadaan/tinjau-teknis/tinjau-teknis.component';
import { KertasKerjaComponent } from '../pengadaan/kertas-kerja/kertas-kerja.component';
import { DraftKontrakComponent } from '../pengadaan/draft-kontrak/draft-kontrak.component';
import { PenerbitanNotaComponent } from '../pengadaan/penerbitan-nota/penerbitan-nota.component';
import { ControlSidebarComponent } from '../control-sidebar/control-sidebar.component';

describe('MainHeaderComponent', () => {
	let component: MainHeaderComponent;
	let fixture: ComponentFixture<MainHeaderComponent>;

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
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MainHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
