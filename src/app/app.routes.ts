import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { CitasComponent } from './citas/citas.component';
import { VideosComponent } from './videos/videos.component';
import { AdminComponent } from './admin/admin.component';
import { AgendaComponent } from './agenda/agenda.component';
import { VideosAdminComponent } from './videos-admin/videos-admin.component';
import { AgendarComponent } from './agendar/agendar.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },         // Ruta para el componente HomePage
  { path: 'iniciar', component: IniciarSesionComponent }, // Ruta para iniciar sesión

  { 
    path: 'perfil', 
    component: PerfilUserComponent,
      children:[ 
        {path: 'citas', component: CitasComponent },        // Ruta para citas
        { path: 'videos', component: VideosComponent },
        { path: '', redirectTo: 'citas', pathMatch: 'full' },
      ],

   },  

   { 
    path: 'admin', 
    component: AdminComponent,
      children:[ 
        {path: 'agenda', component: AgendaComponent },        // Ruta para citas
        { path: 'videos-admin', component: VideosAdminComponent },
        { path: '', redirectTo: 'citas', pathMatch: 'full' },
      ],

   },  

   {path:'agendar',
    component:AgendarComponent,
    

   },




  { path: '**', redirectTo: '', pathMatch: 'full' },   // Ruta comodín para 404
];
