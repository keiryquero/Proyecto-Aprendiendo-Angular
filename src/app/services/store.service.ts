import { Injectable } from '@angular/core';
import {Product} from '../models/Product.models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCard:Product[]=[];
  constructor() { }


  addProduct(products:Product){
    this.myShoppingCard.push(products); 
  }
getShoppingCard(){
  return this.myShoppingCard;
}

  getTotal(){
   return this.myShoppingCard.reduce((sum,item)=>sum + item.price, 0);
  }
}
