import { Component, OnInit } from '@angular/core';
import { Cars } from '../cars';
import { CARS } from "../cars-items";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
	cars = CARS;

  selectedCar: Cars;
  constructor() { }

  ngOnInit() {
  }
onSelect(car: Cars): void {
    this.selectedCar = car;
  }
}
