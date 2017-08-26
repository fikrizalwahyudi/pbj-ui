import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainSideComponent } from './main-side/main-side.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
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
    Dashboard1Component, SuratPertamaComponent, SuratKeduaComponent, PenggunaComponent, PegawaiComponent, PenyediaComponent, ProfileComponent, PenggunaFormComponent, PegawaiFormComponent, PenyediaFormComponent, PengadaanFormComponent, KakFormComponent, KpaComponent, PpkComponent, TeknisComponent, TinjauKakComponent, TinjauTeknisComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
