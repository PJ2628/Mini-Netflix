import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderIniComponent } from './header-ini/header-ini.component';
import { GalleryComponent } from './gallery/gallery.component';

import {HttpClientModule} from '@angular/common/http';
import { AdministracionComponent } from './administracion/administracion.component';
import { RegistroComponent } from './registro/registro.component';
import { Routes,RouterModule } from '@angular/router';

import { RegistroService } from './registro/registro.service';

import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from './categorias/categorias.component';
import { CuentasTipoComponent } from './cuentas-tipo/cuentas-tipo.component';
import { CuentaComponent } from './registro/cuenta.component';
import { VideoComponent } from './video/video.component';


//VIDEO
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PelipruebaComponent } from './peliprueba/peliprueba.component';
    



const routes:Routes=[
  {path:'',redirectTo:'/landing',pathMatch:'full'},
{path:'registro',component:RegistroComponent},
{path:'landing',component:GalleryComponent},
{path:'cuenta',component:CuentaComponent},
{path:'registro/:idcuenta',component:RegistroComponent},
{path:'video/:pelicula',component:VideoComponent},
{path:'inicio',component:InicioComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'pelicula',component:PeliculaComponent},
{path:'categoria',component:CategoriasComponent},
{path:'peliculaPrueba',component:PelipruebaComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderIniComponent,
    GalleryComponent,
    AdministracionComponent,
    RegistroComponent,
    CategoriasComponent,
    CuentasTipoComponent,
    CuentaComponent,
    VideoComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    PeliculaComponent,
    PelipruebaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //video
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    //fin video
    RouterModule.forRoot(routes)
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
