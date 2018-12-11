import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  public qtdOptions = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 100; i++) {
      this.qtdOptions.push(i);
    }
  }

}
