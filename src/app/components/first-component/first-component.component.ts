import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Thales';
  age: number = 30;
  job = 'Programador';
  hobbies = ['correr', 'jogar','tocar guitarra'];
  car = {
    name: 'HB20',
    year: 2018,
  }
 constructor() {}

 ngOnInit(): void {

 }

}
