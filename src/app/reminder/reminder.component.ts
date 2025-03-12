import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-reminder',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ HeaderComponent, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.scss'
})
export class ReminderComponent implements OnInit {
  // Definir el formulario con usuario y contraseña
  recordatorioForm = new FormGroup({
      tipo: new FormControl('', [Validators.required]),
      titulo : new FormControl('', [Validators.required, Validators.minLength(4)]),
      detalle : new FormControl('', [Validators.required, Validators.minLength(10)]),
      fecha : new FormControl('', [Validators.required]),
      repetir: new FormControl('', [Validators.required]),
      vehiculo: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}
  
  
  ngOnInit(): void {
   
  }

  onSubmit() {
    if (this.recordatorioForm.valid) {
      console.log('Formulario válido');
      this.router.navigate(['/home']);
    } else {
      console.log('Formulario inválido');
    }
  }

}
