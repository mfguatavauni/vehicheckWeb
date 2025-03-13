import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


import { FormGroup, FormBuilder,FormControl, Validators, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-addfamilygroup',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './addfamilygroup.component.html',
  styleUrl: './addfamilygroup.component.scss'
})
export class AddfamilygroupComponent implements OnInit{
  familyForm: FormGroup;
  

  constructor(private router: Router, private fb: FormBuilder) {
    //Pasar parametros al formulario para dejar predefinidos los campos
    this.familyForm = this.fb.group({
      nombre: ['', Validators.required],
      capacidad: ['4', Validators.required],
      frecuenciaMantenimiento: ['mensual', Validators.required],
      promedioEdades: ['', Validators.required],
    });
  }
  
  ngOnInit(): void {
  }


  onSubmit() {
    if (this.familyForm .valid) {
      console.log('Formulario válido');
      this.router.navigate(['/familygroup']);
    } else {
      console.log('Formulario inválido');
    }
  }

}
