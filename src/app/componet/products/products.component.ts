import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product.models';
import {StoreService} from '../../services/store.service'
import { ProductsService } from 'src/app/services/products.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
  myShoppingCard:Product[]=[];
  total = 0;
  products: Product[] = [];
  today = new Date ();
  date = new Date (2022,6,12);  
 vowels = 'aeiou';
    /* {
      id:1,
      name_product:'Bandolero Negro',
      price: 50000,
      image:'./assets/images/producto_001.jpg'
    },
    
      {
        id:2,
      name_product:'Maleta Ejecutiva Crema',
      price:60000,
      image:'./assets/images/producto_002.jpg'
    },
    {
      id:3,
      name_product:'Bandolero Rosado',
      price: 50000,
      image:'./assets/images/producto_003.jpg'
    },
    {
      id:4,
      name_product:'Bolso mostaza',
      price: 55000,
      image:'./assets/images/producto_004.jpg'
    },
    {
      id:5,
      name_product:'Bolso Rayas',
      price: 55000,
      image:'./assets/images/producto_005.jpg'
    }, */
   
    constructor(
    private storeService:StoreService,
    private ProductsService:ProductsService
  ) {
    this.myShoppingCard = this.storeService.getShoppingCard();
  }

  ngOnInit(): void {
    this.ProductsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
    });
  }

  onAddToShoppingCard(products: Product){
   this.storeService.addProduct(products);
   this.total= this.storeService.getTotal();
   }
  
}
