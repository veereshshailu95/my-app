import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  
  name:string = "";
  price:number = 0;
  rating:number = 0;
  freedelivery:boolean = true;
  searchtext:string = "";
  user:number = 0;
  carts:number = 0;

  products:any = [
  { name: "iPhone 15", price: 80000, rating: 4.7, freeDelivery: true },
  { name: "Samsung TV", price: 55000, rating: 4.5, freeDelivery: true },
  { name: "Nike Shoes", price: 6000, rating: 4.3, freeDelivery: false },
  { name: "Wooden Table", price: 12000, rating: 4.1, freeDelivery: true },
  { name: "Dell Laptop", price: 75000, rating: 4.6, freeDelivery: true },
  { name: "T-Shirt", price: 800, rating: 4.0, freeDelivery: false },
  { name: "Office Chair", price: 9000, rating: 4.2, freeDelivery: true },
  { name: "Bluetooth Speaker", price: 2500, rating: 4.4, freeDelivery: true },
  { name: "Running Shorts", price: 1200, rating: 3.9, freeDelivery: false },
  { name: "Smart Watch", price: 5000, rating: 4.3, freeDelivery: true }
];

delete(i:number){
  this.products.splice(i,1);
}

search(){
  this.products=this.products.filter((product:any) =>{
    return product.name.toLowerCase().includes(this.searchtext.toLowerCase())
  });
}

add(){
  let product ={
    name:this.name,
    price:this.price,
    rating:this.rating,
    freeDelivery:this.freedelivery,
  }
  this.products.unshift(product);

  this.name = "";
  this.price = 0;
  this.rating = 0;
  this.freedelivery = true;
}

onlyfd(){
  this.products=this.products.filter((product:any)=>product.freeDelivery === true);
}

pricehl(){
  this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
}

pricelh(){
  this.products=this.products.sort((a:any,b:any) =>a.price-b.price)
}

ratinghl(){
  this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating)
}

ratinglh(){
  this.products=this.products.sort((a:any,b:any) =>a.rating-b.rating)
}

apply(){
  this.products=this.products.map((product:any)=>{
    product.price=product.price-(product.price*50/100);
    return product;
  });
}

charges(){
  this.products=this.products.map((product:any)=>{
    product.price=product.price+30
    return product;
  })
}

total(){
  this.user=this.products.reduce((sum:any,product:any)=>{
    return sum+product.price
  },0);
}

cart(){
  this.carts=this.products.reduce((sum:any,product:any) =>sum+product.price ,0);
}
// cart(){
//   this.carts = this.products.reduce((sum:any, product:any) => sum + product.price, 0);
// }


}
