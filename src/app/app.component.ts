import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import $ from 'jquery';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  title = 'Vehicheck';

  ngOnInit(): void {
    $(document).ready(function() {    
      $("#btnMensaje").on('click', function() {
        alert("Mensaje");
      })
    });
  }
}
