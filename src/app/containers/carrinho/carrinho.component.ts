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

  private productsArray = produtos;

  //EventEmited
  public productClicked: any;
  private subscription: Subscription;

  public cartArray: Produto[];

  constructor(private carrinhoService: CarrinhoService) {
    // this.subscription = this.carrinhoService.getProduct().subscribe(productAdded => { this.productClicked = productAdded })
    this.cartArray = this.carrinhoService.cartArray;
  }

  deleteProduct(_index){
    this.carrinhoService.deleteProduct(_index);
  }

  ngOnInit() {
    this.createOptions();

  }

  //options of the select of quantify
  createOptions() {
    for (let i = 1; i < 100; i++) {
      this.qtdOptions.push(i);
    }
  }
}
