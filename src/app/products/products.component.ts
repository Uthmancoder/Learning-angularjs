import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
 {id:1, name :"Watch", price : 330, color: "white", availability : "Available", image : "https://watchlocker.ng/wp-content/uploads/2023/09/GA-2200BB-1ADR-1-400x400.jpg"},
 {id:2, name :"Fridge", price : 9330, color: "gray", availability : "Available", image : "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/6956891/1.jpg?7613"},
 {id:3, name :"Plate", price : 5230, color: "white", availability : "Not Available", image : "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/2811512/1.jpg?1860"},
 {id:4, name :"Laptop", price : 6330, color: "white", availability : "Available", image : "https://shopinverse.com/cdn/shop/files/image_61400ea5-33ce-47e6-9776-638a4e8449fc.jpg?v=1684050406&width=713"},
 {id:5, name :"Iphone", price : 330, color: "white", availability : "Not Available", image : "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/4652852/1.jpg?0182"}
]
}
