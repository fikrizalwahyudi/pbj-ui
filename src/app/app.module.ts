import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AdminComponent} from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';

import { AuthGuard } from './library/_guards/auth.guards';
import { AuthService } from './library/_services/auth.service';
import { ApiService } from './library/_services/api.service';
import { LoginModule } from './login/login.module';
import { PenggunaFormComponent } from './master/pengguna/pengguna-form/pengguna-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PenggunaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AppRoutingModule,
    ShareModule,
    LoginModule
  ],
  providers: [AuthGuard,AuthService,ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }