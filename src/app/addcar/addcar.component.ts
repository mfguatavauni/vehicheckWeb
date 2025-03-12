import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


import { FormGroup, FormBuilder,FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-addcar',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './addcar.component.html',
  styleUrl: './addcar.component.scss'
})
export class AddcarComponent implements OnInit{
  //Definir el formulario
  carForm: FormGroup; 
  

  constructor(private router: Router, private fb: FormBuilder) {
    //Pasar parametros al formulario para dejar predefinidos los campos
    this.carForm = this.fb.group({
      placa: ['', Validators.required],
      tipoVehiculo: ['automovil', Validators.required], 
      tipoCombustible: ['gasolina', Validators.required],
    });
  }


  ngOnInit(): void {
    
  }
  
  onSubmit() {
    if (this.carForm .valid) {
      console.log('Formulario válido');
      this.router.navigate(['/home']);
    } else {
      console.log('Formulario inválido');
    }
  }


}
