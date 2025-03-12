import { Component, OnInit } from '@angular/core';
import { extend } from 'jquery';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
   // Definir el formulario con usuario y contraseña
   loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.minLength(4)]), // Campo obligatorio, mínimo 4 caracteres
      contraseña: new FormControl('', [Validators.required, Validators.minLength(6)]) // Mínimo 6 caracteres
    });
  
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    
  }

  onSubmit() {
    if (this.loginForm.valid) {
      //console.log('Formulario enviado:', this.loginForm.value);
      console.log('Valido');
      this.router.navigate(['/home']);
    } else {
      console.log('Formulario inválido');
    }
  }

}
