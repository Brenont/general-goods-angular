import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviroment';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersCollection: AngularFirestoreCollection<[]>;
  public orders = this.db.collection("Pedidos").valueChanges();
  public ordersRef: any;

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.ordersCollection = db.collection("Pedidos");

    this.orders.subscribe(console.log)
  }


  addOrder(_order) {
    console.log("acessed service")
    this.ordersCollection.doc(_order.key).set(_order);
    // this.ordersCollection.doc(_product.key).set(_product);
  }

  deleteProduct(product: any) {
    this.ordersCollection.doc(product.key).delete();
  }

  update(order, changes) {
    console.log(changes);
    this.ordersCollection.doc(order.key).update(changes);
    console.log("prod",order);

  }

  edit(order) {
    this.ordersRef = Object(order)
    console.log(this.ordersRef)
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
