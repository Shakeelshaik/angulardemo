import { Component, OnInit } from '@angular/core';
import { items } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: items[] = [
   { 
    id: 1,
    name: "Chicken Biryani",
    desc: "its made of rice and spices and chicken",
    tasteType: "spicy",
    avail: "yes",
    image: '/src/app/images/food.jpg',
    price: 200,
    type: "non-veg"
   },
   { 
    id: 2,
    name: "Veg Biryani",
    desc: "its made of rice and spices and veggis",
    tasteType: "spicy",
    avail: "yes",
    image: '/src/app/images/food.jpg',
    price: 150,
    type: "veg"
  },
  { 
    id: 3,
    name: "Paneer Masala",
    desc: "its made of Paneer and tomoto juice and spices",
    tasteType: "no spicy",
    avail: "yes",
    image: '/src/app/images/food.jpg',
    price: 180,
    type: "veg"
  }
  ];

  public counter : number = 0;
    
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    this.counter -= 1;
  }
  constructor() { }

  ngOnInit() {
  }


}
