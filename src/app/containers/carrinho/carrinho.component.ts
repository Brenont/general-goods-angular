import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/product';
import { produtos } from 'src/app/services/produto.service';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  public qtdOptions = [];

  public storageName :string = "cart";

  private productsArray = produtos;
  public cartArray = JSON.parse(localStorage.getItem(this.storageName));
  


  constructor() { }

  ngOnInit() {
    this.createOptions();
    
    //converting object to string and set on LS
    localStorage.setItem(this.storageName, JSON.stringify(this.productsArray));

  }

  addToCart(_index) {
    var productToAdd = this.cartArray[_index];

    var oldArray = this.cartArray;
    var oldArray = oldArray.push(productToAdd);
    console.log(this.cartArray);
    this.updateStorage(this.cartArray);
  }

  deleteProduct(_index) {
    var deleted = this.cartArray.splice(_index, -1);
    this.updateStorage(deleted);
  }

  updateStorage(update){
    var updateString = JSON.stringify(update);
    localStorage.setItem(this.storageName, updateString);
  }

  //options of the select of quantify
  createOptions() {
    for (let i = 1; i < 100; i++) {
      this.qtdOptions.push(i);
    }
  }
}
