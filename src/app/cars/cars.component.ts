import { Component, OnInit } from '@angular/core';
import { CARS } from "../cars-items";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
	cars = CARS;

  selectedCar: Car;
  constructor() { }

  ngOnInit() {
  }
onSelect(car: Car): void {
    this.selectedCar = car;
  }
}
