import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-historycar',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, MatButtonModule, MatTableModule, MatCardModule, RouterLink, MatListModule],
  templateUrl: './historycar.component.html',
  styleUrl: './historycar.component.scss'
})
export class HistorycarComponent  implements OnInit  {

  constructor(private router: Router) {}
  
  ngOnInit() 
  {
    
  }

  goList() 
  {
    this.router.navigate(['/listcar']);
  }
}


