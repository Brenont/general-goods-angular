import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

  export const produtos :Produto[] = [
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
 ];



@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  public products = produtos;
  
  constructor(private http: HttpClient, private db: AngularFirestore) { }
  // constructor() { }
  
  public produtosDb = this.db.collection("produtos").valueChanges();
    
    PostProduto(produtos) {
      
    }
    
    DeleteProduto() {
      
    }
    
    UpdateProduto(){
      
    }
  }
  