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
import { PengadaanFormComponent } from './dashboard1/pengadaan-form/pengadaan-form.component';
import { KakFormComponent } from './dashboard1/kak-form/kak-form.component';
import { KpaComponent } from './dashboard1/kpa/kpa.component';


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
    Dashboard1Component, SuratPertamaComponent, SuratKeduaComponent, PenggunaComponent, PegawaiComponent, PenyediaComponent, ProfileComponent, PenggunaFormComponent, PegawaiFormComponent, PenyediaFormComponent, PengadaanFormComponent, KakFormComponent, KpaComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
