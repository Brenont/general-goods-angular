import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Produto } from '../model/product';
import { produtos } from './produto.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private cart = new Subject<any>();

  public storageName: string = "cart";
  public cartArray: any[] = JSON.parse(localStorage.getItem(this.storageName)) ?  JSON.parse(localStorage.getItem(this.storageName)) : [] ;

  private productsArray = produtos;
  private initArr = [];

  addToCart(produto) {
    //get array of API
    console.log(this.cartArray);
    this.cartArray.push(produto);
    this.updateStorage(this.cartArray);
  }

  initStorage() {
    if (!localStorage.getItem(this.storageName)) {
      localStorage.setItem(this.storageName, JSON.stringify(this.initArr));
      console.log(this.initArr)
    }
  }

  deleteProduct(_index) {
    this.cartArray.splice(_index, 1);
    this.updateStorage(this.cartArray);
  }

  updateStorage(update) {
    var updateString = JSON.stringify(update);
    localStorage.setItem(this.storageName, updateString);
  }

  constructor() { }
}
