import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/product';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  public qtdOptions = [];
  public carrinhoItens: Produto[];

  public testObj = {
    name: "Caixa Térmica",
    descriptions: [
      "Caixa apropriada para transportar produtos perecíveis à longa distância.",
    ],
    features: [
      "Feito em polietileno, resistente aos raios UV.",
      "Solado com poliuretano para conservar temperatura por mais tempo.",
      "Material robusto, resistente à impactos.",
      "Travas de aço inox.*",
      "Pedais de borracha antiderrapante.*",
      "Dreno.*",
      "Travas de borracha.*",
      "Rodizios com travas e rodas de borracha antiderrapantes.*",
    ],
    sizes: null,
    extras: [
      "*Itens opcionais, personalizadas de acordo com necessidade do cliente.",
    ],
    img: "../../../assets/img/caixatermica.png",
    customizes: [
      "Travas de aço inox",
      "Pedais de borracha antiderrapante",
      "Dreno",
      "Travas de borracha",
      "Rodizios com travas e rodas de borracha antiderrapantes"],
    nucleoOption: null,
  }

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 100; i++) {
      this.qtdOptions.push(i);
    }
    var objString = this.testObj.toString();
    localStorage.setItem('test2', objString);
  }
}

