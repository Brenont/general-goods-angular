import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  productCart: any

  constructor(
    private carrinhoService: CarrinhoService
  ) {
    this.productCart = this.carrinhoService.cartArray
  }

  ngOnInit() {
  }


  deleteProduct(index) {
    this.carrinhoService.deleteProduct(index)
  }
}
