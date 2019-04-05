import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  public productCart: any
  public orders: any
  public name = '';
  public phone = '';
  public text = '';
  public date = new Date();
  // public products = this.productCart;

  constructor(
    private carrinhoService: CarrinhoService,
    private orderService: OrderService
  ) {
    this.productCart = this.carrinhoService.cartArray;
    this.orders = this.orderService.orders
  }

  ngOnInit() {
  }

  AddOrder(_order){
    var product = {
      name: this.name,
      phone: this.phone,
      text: this.text,
      date: this.date,
      products: this.productCart,
      key: this.generateKey(),

    }
    this.orderService.addOrder(product)
  }

  generateKey() {
    return this.orderService.generateKey();
  }

  // buildProduct() {
  //   var product = {
  //     name: this.name,
  //     phone: this.phone,
  //     text: this.text,
  //     key: this.generateKey(),

  //   }
  //   console.log(product);
  //   this.add(product);
  // }
  deleteProduct(index) {
    this.carrinhoService.deleteProduct(index)
  }
}
