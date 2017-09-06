import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainSideComponent } from './main-side/main-side.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { Dashboard1Component } from './dashboard/dashboard.component';
import { ShareModule } from '../share/share.module';
import { SuratPertamaComponent } from './surat-pertama/surat-pertama.component';
import { SuratKeduaComponent } from './surat-kedua/surat-kedua.component';
import { PenggunaComponent } from './master/pengguna/pengguna.component';
import { PegawaiComponent } from './master/pegawai/pegawai.component';
import { PenyediaComponent } from './master/penyedia/penyedia.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { PenggunaFormComponent } from './master/pengguna/pengguna-form/pengguna-form.component';
import { PegawaiFormComponent } from './master/pegawai/pegawai-form/pegawai-form.component';
import { PenyediaFormComponent } from './master/penyedia/penyedia-form/penyedia-form.component';
import { PengadaanFormComponent } from './pengadaan/pengadaan-form.component';
import { KakFormComponent } from './pengadaan/kak-form/kak-form.component';
import { KpaComponent } from './pengadaan/kpa/kpa.component';
import { PpkComponent } from './pengadaan/ppk/ppk.component';
import { TeknisComponent } from './pengadaan/teknis/teknis.component';
import { TinjauKakComponent } from './pengadaan/tinjau-kak/tinjau-kak.component';
import { TinjauTeknisComponent } from './pengadaan/tinjau-teknis/tinjau-teknis.component';
import { KertasKerjaComponent } from './pengadaan/kertas-kerja/kertas-kerja.component';
import { DraftKontrakComponent } from './pengadaan/draft-kontrak/draft-kontrak.component';
import { PenerbitanNotaComponent } from './pengadaan/penerbitan-nota/penerbitan-nota.component';
import { DraftPenyediaComponent } from './pengadaan/draft-penyedia/draft-penyedia.component';
import { PelaksanaanPengadaanComponent } from './pengadaan/pelaksanaan-pengadaan/pelaksanaan-pengadaan.component';
import { LdpComponent } from './pengadaan/ldp/ldp.component';
import { PphComponent } from './pengadaan/pph/pph.component';
import { Ppk2Component } from './pengadaan/ppk2/ppk2.component';
import { Ppk3Component } from './pengadaan/ppk3/ppk3.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
    FormsModule
  ],
  declarations: [
    AdminComponent, 
    MainSideComponent, 
    MainHeaderComponent, 
    FooterComponent, 
    ControlSidebarComponent, 
    Dashboard1Component, SuratPertamaComponent, SuratKeduaComponent, PenggunaComponent, PegawaiComponent, PenyediaComponent, ProfileComponent, PenggunaFormComponent, PegawaiFormComponent, PenyediaFormComponent, PengadaanFormComponent, KakFormComponent, KpaComponent, PpkComponent, TeknisComponent, TinjauKakComponent, TinjauTeknisComponent, KertasKerjaComponent, DraftKontrakComponent, PenerbitanNotaComponent, DraftPenyediaComponent, PelaksanaanPengadaanComponent, LdpComponent, PphComponent, Ppk2Component, Ppk3Component
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
