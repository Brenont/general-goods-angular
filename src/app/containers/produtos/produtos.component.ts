import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public productsList = [];

  constructor() {
    this.productsList = [
      {
        name: "Caixa de Isopor",
        description: [
          "Caixa apropriada para transportar produtos perecíveis à longa distância.",
        ],
        features: [
          "Disponibilizamos caixa com e sem núcleo.",
          "Fabricamos em qualquer tamanho, formato, densidade e estanqueidade.",
        ],
      },

      {
        name: "Caixa de Isopor com Núcleo",
        description: [
          "Caixa apropriada para transportar produtos perecíveis à longa distância.",

          "O núcleo é utilizado para separar o material transportado do gelo reciclável, evitando o congelamento do material e aumentando o controle da temperatura interna.",
        ],
        sizes: [12, 37, 50, 103, 130]
      },

      {
        name: "Caixa Térmica",
        description: [
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
        extra: [
          "*Itens opcionais, personalizadas de acordo com necessidade do cliente.",
        ]
      },

      {
        name: "Paletes",
        description: ["Viabiliza a otimização de transporte e armazenagem de diversos produtos.",
        ],
        features: [
          "Palete rotomoldado.",
          "Feito em polietileno em várias medidas e formatos.",
          "Possibilidade de reforço interno em aço ou poliuretano.",
          "Disponível em diversas cores.",
        ],
      },

      {
        name: "Gelo Reciclável",
        description: [
          "Gelo reciclável a base de celulose vegetal armazenado em recipiente plástico rígido, ideal para transportar produtos pereciveis longa distância que precisam de resfriamento constante.",
        ],
        features: [
          "Fabricamos em qualquer tamanho e formato.",
        ],
      }
    ]
  }

  ngOnInit() {
  }

}
