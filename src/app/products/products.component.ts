import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
 {id:1, category : "Watch", name :"Watch", price : 330, color: "white", availability : "Available", image : "https://watchlocker.ng/wp-content/uploads/2023/09/GA-2200BB-1ADR-1-400x400.jpg"},
 {id:2, category : "Gadgets", name :"Fridge", price : 9330, color: "gray", availability : "Available", image : "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/6956891/1.jpg?7613"},
 {id:3, category : "Gadgets", name :"Plate", price : 5230, color: "white", availability : "Not Available", image : "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/2811512/1.jpg?1860"},
 {id:4, category : "Electronics", name :"Laptop", price : 6330, color: "white", availability : "Available", image : "https://shopinverse.com/cdn/shop/files/image_61400ea5-33ce-47e6-9776-638a4e8449fc.jpg?v=1684050406&width=713"},
 {id:5, category : "phones", name :"Iphone", price : 330, color: "white", availability : "Not Available", image : "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/4652852/1.jpg?0182"},
 {id:6, category : "Watch", name :"Watch", price : 330, color: "white", availability : "Available", image : "https://fdn2.gsmarena.com/vv/bigpic/oppo-watch4-pro-.jpg"},
 {id:7, category : "phones", name :"Phone", price : 1230, color: "white", availability : "Available", image : "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg"}
]

getTotalProducts(){
  return this.products.length;
}
getTotalWatches(){
  return this.products.filter(products => products.category === "Watch").length;
}
getTotalPhones(){
  return this.products.filter(products => products.category === "phones").length;
}
getTotalElectronics(){
  return this.products.filter(products => products.category === "Electronics").length;
}
getTotalGadgets(){
  return this.products.filter(products => products.category === "Gadgets").length;
}

productSelected  : string = "all"

onfliteredProductChange(selectedProductType : string){
   this.productSelected = selectedProductType;
  //  console.log(this.productSelected);
}

SearchedText : string = "";

onsearchTextEnter(SearchedValue : string){
  this.SearchedText =  SearchedValue;
  // console.log(this.SearchedText)
}
}
