import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name = 'Matheus';
  age = '25';
  job = 'Jogador de Futebol'
  car = {
      name: 'BMW',
      age: 2015,
}
}
