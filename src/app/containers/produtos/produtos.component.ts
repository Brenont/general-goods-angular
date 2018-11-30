import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public products = [];

  constructor() { 
    this.products = [
      {
        name: "Caixa de Isopor",
        description: "Caixa apropriada para transportar produtos perecíveis à longa distância.",
        features : [ "Disponibilizamos caixa com e sem núcleo.",
        "Fabricamos em qualquer tamanho, formato, densidade e estanqueidade."]
      },
      
      {
        name: "CAIXA DE ISOPOR COM NÚCLEO",
      }
    ]
  }

  ngOnInit() {
  }

}
