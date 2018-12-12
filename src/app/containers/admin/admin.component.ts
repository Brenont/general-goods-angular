import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { LANG } from '../../../theme/pt';
import {  Produto } from 'src/app/model/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public produtos: Produto[];

  public url = environment.url;

  public lang = LANG;

  constructor(private prodService: ProdutoService, private http: HttpClient) {

    this.produtos = [
      {
        name: "Caixa de Isopor",
        descriptions: ["Caixa apropriada para transportar produtos perecíveis à longa distância.",],
        features: [
          "Disponibilizamos caixa com e sem núcleo.",
          "Fabricamos em qualquer tamanho, formato, densidade e estanqueidade.",
        ],
        sizes: null,
        extras: null,
        img: "../../../assets/img/caixa.png",
        customizes: null,
        nucleoOption: true,
      },

      {
        name: "Caixa de Isopor com Núcleo",
        descriptions: ["Caixa apropriada para transportar produtos perecíveis à longa distância.", "O núcleo é utilizado para separar o material transportado do gelo reciclável, evitando o congelamento do material e aumentando o controle da temperatura interna.",],
        features: null,
        sizes: [12, 37, 50, 103, 130],
        extras: null,
        img: "../../../assets/img/caixanucleo.png",
        customizes: null,
        nucleoOption: true,
      },

      {
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
      },

      {
        name: "Paletes",
        descriptions: ["Viabiliza a otimização de transporte e armazenagem de diversos produtos.",
        ],
        features: [
          "Palete rotomoldado.",
          "Feito em polietileno em várias medidas e formatos.",
          "Possibilidade de reforço interno em aço ou poliuretano.",
          "Disponível em diversas cores.",
        ],
        sizes: null,
        extras: null,
        img: "../../../assets/img/palete.png",
        customizes: null,
        nucleoOption: null,

      },

      {
        name: "Gelo Reciclável",
        descriptions: [
          "Gelo reciclável a base de celulose vegetal armazenado em recipiente plástico rígido, ideal para transportar produtos pereciveis longa distância que precisam de resfriamento constante.",
        ],
        features: [
          "Fabricamos em qualquer tamanho e formato.",
        ],
        sizes: null,
        extras: null,
        img: "../../../assets/img/gelo.png",
        customizes: null,
        nucleoOption: null,
      }
    ]
  }


  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
   }

  ngOnInit() {
    // this.prodService.getProdutos().subscribe(dado => {
    //   this.produtos = dado;
    // })
    
}

}
