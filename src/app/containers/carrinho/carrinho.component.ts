import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/product';
import { produtos } from 'src/app/services/produto.service';
import { Subscription } from 'rxjs';
import { CarrinhoService } from 'src/app/services/carrinho.service';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  public qtdOptions = [];

  public storageName: string = "cart";

  private productsArray = produtos;
  public cartArray = JSON.parse(localStorage.getItem(this.storageName));

  //EventEmited
  public productClicked: any;
  private subscription: Subscription;

  constructor(private carrinhoService: CarrinhoService) {
    this.subscription = this.carrinhoService.getProduct().subscribe(productAdded => { this.productClicked = productAdded })
    }

  ngOnInit() {
    this.createOptions();
    
    //converting object to string and set on LS if wasn't seted
    if (!localStorage.getItem(this.storageName)) {
      localStorage.setItem(this.storageName, JSON.stringify(this.productsArray));
    }

  }

  addToCart(_index) {
    this.cartArray.push(this.cartArray[_index]);
    this.updateStorage(this.cartArray);
  }

  // addToCartByObj(pdtObj) {
  //   this.cartArray.push(pdtObj)
  //   this.updateStorage(this.cartArray);
  // }
  
  deleteProduct(_index) {
    this.cartArray.splice(_index, 1);
    this.updateStorage(this.cartArray);
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
