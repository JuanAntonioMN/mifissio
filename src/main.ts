import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importa tus rutas


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Configura las rutas aquí
  ]
}).catch(err => console.error(err));


