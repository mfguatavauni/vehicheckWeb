import { Component, OnInit } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatButtonModule, MatIconModule, MatDividerModule, MatCardModule, HeaderComponent, RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  
  ngOnInit() {
    
  }

  goReminder() {
    this.router.navigate(['/reminder']);
  }

  goListCar(){
    this.router.navigate(['/list-car']);
  }
}
