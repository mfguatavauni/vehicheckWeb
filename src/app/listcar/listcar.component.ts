import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


export interface ListadoVehiculos {
  placa: string;
  tipo: string;
  imagen: string;
}

const ELEMENT_DATA: ListadoVehiculos[] = [
  {placa: 'ABC123', tipo: 'Vehiculo', imagen: 'https://www.toyota.com.gt/media/vehicle/2021/land-cruiser/hero.png'},
  {placa: 'DEF456', tipo: 'Vehiculo', imagen: 'https://www.toyota.com.gt/media/vehicle/2021/land-cruiser/hero.png'},
  {placa: 'GHI789', tipo: 'Vehiculo', imagen: 'https://www.toyota.com.gt/media/vehicle/2021/land-cruiser/hero.png'},
  {placa: 'JKL012', tipo: 'Vehiculo', imagen: 'https://www.toyota.com.gt/media/vehicle/2021/land-cruiser/hero.png'},
  {placa: 'MNO345', tipo: 'Camioneta', imagen: 'https://www.toyota.com.gt/media/vehicle/2021/land-cruiser/hero.png'}
];


@Component({
  selector: 'app-listcar',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, MatButtonModule, MatTableModule],
  templateUrl: './listcar.component.html',
  styleUrl: './listcar.component.scss'
})
export class ListcarComponent implements OnInit 
{
  displayedColumns: string[] = ['placa', 'tipo', 'acciones' ];
  dataSource = ELEMENT_DATA;  


  constructor(private router: Router) {}
  
  ngOnInit() 
  {
    
  }

  goHome() 
  {
    this.router.navigate(['/home']);
  }

  viewVehicle(placa: string){

  }

  deleteVehicle(placa: string){

  }

  goAddVehicle()
  {
    this.router.navigate(['/addcar']);
  }

  godetailVehicle(placa: string)
  {
    this.router.navigate(['/historycar']);
  }

}
