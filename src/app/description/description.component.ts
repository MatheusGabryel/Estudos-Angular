import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  team = 'Fluminense';
  tittles = {
    Libertadores: 1,
    Brasileirão: 4,
    Mundial: 0
  }
}
