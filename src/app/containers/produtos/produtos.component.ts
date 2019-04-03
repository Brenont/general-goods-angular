import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/product';
// import { produtos } from 'src/app/services/produto.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  // public productsList: Array<Produto> = produtos;
  public productsList: any;
  public products: any;
  constructor(
    private carrinhoService: CarrinhoService,
    private prodService: ProdutoService
  ) {
      this.products = this.prodService.products
  }

  addToCart(product) {
    this.carrinhoService.addToCart(product);
  }
  ngOnInit() {
    this.carrinhoService.initStorage()
  }

}
