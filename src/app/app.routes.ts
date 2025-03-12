import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ListcarComponent } from './listcar/listcar.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'reminder',  component: ReminderComponent},
    {path: 'listcar', component: ListcarComponent}
];
