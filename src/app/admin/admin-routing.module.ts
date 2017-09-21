import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { Dashboard1Component } from './dashboard/dashboard.component';
import { AuthGuard } from '../library/_guards/auth.guards';
import { SuratPertamaComponent } from './surat-pertama/surat-pertama.component';
import { SuratKeduaComponent } from './surat-kedua/surat-kedua.component';
import { PenggunaComponent } from './master/pengguna/pengguna.component';
import { PegawaiComponent } from './master/pegawai/pegawai.component';
import { PenyediaComponent } from './master/penyedia/penyedia.component';
import { ProfileComponent } from './profile/profile.component';
import { PenggunaFormComponent } from '../admin/master/pengguna/pengguna-form/pengguna-form.component';
import { PegawaiFormComponent } from './master/pegawai/pegawai-form/pegawai-form.component';
import { PenyediaFormComponent } from './master/penyedia/penyedia-form/penyedia-form.component';
import { KakFormComponent } from './pengadaan/kak-form/kak-form.component';
import { KpaComponent } from './pengadaan/kpa/kpa.component';
import { PpkComponent } from './pengadaan/ppk/ppk.component';
import { PengadaanFormComponent } from './pengadaan/pengadaan-form.component';
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
import { PphpComponent } from './pengadaan/pphp/pphp.component';
import { Ppk2buatspkComponent } from './pengadaan/ppk2buatspk/ppk2buatspk.component';
import { LaporanStatusPengadaanComponent } from './pengadaan/laporan-status-pengadaan/laporan-status-pengadaan.component';

// canActivate:[AuthGuard]
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: '', component: Dashboard1Component },
          { path: 'dashboard', component: Dashboard1Component },
          { path: 'laporan1', component: SuratPertamaComponent },
          { path: 'laporan2', component: SuratKeduaComponent },
          { path: 'surat1', component: SuratPertamaComponent },
          { path: 'surat2', component: SuratKeduaComponent },
          { path: 'pengguna', component: PenggunaComponent },
          { path: 'penggunaForm', component: PenggunaFormComponent },
          { path: 'pegawai', component: PegawaiComponent },
          { path: 'pegawaiForm', component: PegawaiFormComponent },
          { path: 'penyedia', component: PenyediaComponent },
          { path: 'penyediaForm', component: PenyediaFormComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'pengadaanForm', component: PengadaanFormComponent },
          { path: 'kakForm', component: KakFormComponent },
          { path: 'kpa', component: KpaComponent },
          { path: 'ppk', component: PpkComponent },
          { path: 'teknis', component: TeknisComponent },
          { path: 'tinjauKak', component: TinjauKakComponent },
          { path: 'tinjauTeknis', component: TinjauTeknisComponent },
          { path: 'kertasKerja', component: KertasKerjaComponent },
          { path: 'draftKontrak', component: DraftKontrakComponent },
          { path: 'penerbitanNota', component: PenerbitanNotaComponent },
          { path: 'draftPenyedia', component: DraftPenyediaComponent },
          { path: 'pelaksaanPengadaan', component: PelaksanaanPengadaanComponent },
          { path: 'ldp', component: LdpComponent },
          { path: 'pph', component: PphComponent },
          { path: 'ppk2', component: Ppk2Component },
          { path: 'ppk3', component: Ppk3Component },
          { path: 'pphp', component: PphpComponent },
          { path: 'ppk2buatspk', component: Ppk2buatspkComponent },
          { path: 'laporan', component: LaporanStatusPengadaanComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
