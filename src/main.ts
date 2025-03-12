import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations()]
}).catch((err) => console.error(err));
