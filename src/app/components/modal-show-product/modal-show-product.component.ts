import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-modal-show-product',
  templateUrl: './modal-show-product.component.html',
  styleUrls: ['./modal-show-product.component.scss']
})
export class ModalShowProductComponent implements OnInit {

  public produtosRef: any;

  constructor(private produtoService: ProdutoService) {
    this.produtosRef = this.produtoService.productsRef;
  }

  ngOnInit() {
  }

}
