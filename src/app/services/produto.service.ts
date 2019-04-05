import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviroment';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // public products = produtos;
  private produtosCollection: AngularFirestoreCollection<[]>;
  public products: Observable<any[]>;
  public productsRef: any;

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.produtosCollection = db.collection("produtos");
    this.products = this.db.collection("produtos").valueChanges();

    this.products.subscribe(console.log)
  }


  addProduct(_product) {
    console.log("acessed service")
    this.produtosCollection.doc(_product.key).set(_product);
    // this.produtosCollection.doc(_product.key).set(_product);
  }

  deleteProduct(product: any) {
    this.produtosCollection.doc(product.key).delete();
  }

  update(product, changes) {
    console.log(changes);
    this.produtosCollection.doc(product.key).update(changes);
    console.log("prod", product);

  }

  edit(produto) {
    this.productsRef = Object(produto)
    console.log(this.productsRef)
  }

  generateKey() {
    var d = new Date().getTime();

    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now();
    }

    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return uuid;
  }
}
