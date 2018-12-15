import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/product';
import { produtos } from 'src/app/services/produto.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public productsList: Array<Produto> = produtos;

  constructor(private carrinhoService: CarrinhoService) { }

  sendProduct(_index): void{
    this.carrinhoService.sendProduct(this.productsList[_index]);
    console.log(this.productsList[_index])
  }

  ngOnInit() {
  }

}
