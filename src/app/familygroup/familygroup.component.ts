import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

export interface ListadoGruposFamiliares {
  grupo: string;
}

const ELEMENT_DATA: ListadoGruposFamiliares[] = [
  {grupo: 'Los guardianes del apellido'},
  {grupo: 'Familia unida por siempre'},
  {grupo: 'Los herederos de la tradición'},
  {grupo: 'Grupo amigos del trabajo'}
];


@Component({
  selector: 'app-familygroup',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, MatButtonModule, MatTableModule],
  templateUrl: './familygroup.component.html',
  styleUrl: './familygroup.component.scss'
})
export class FamilygroupComponent implements OnInit 
{
  displayedColumns: string[] = ['grupo', 'acciones' ];
  dataSource = ELEMENT_DATA;  

  
  constructor(private router: Router) {}
  
  ngOnInit() 
  {
    
  }

  goHome() 
  {
    this.router.navigate(['/home']);
  }

  addFamilyGroup()
  {
    this.router.navigate(['/addfamilygroup']);
  }

  editVehicle(grupo: string){}

  deleteVehicle(grupo: string){}

}
