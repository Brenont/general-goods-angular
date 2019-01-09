import { Component, OnInit } from '@angular/core';
import { ProdutoService, produtos } from 'src/app/services/produto.service';
import { LANG } from '../../../theme/pt';
import { Produto } from 'src/app/model/product';
import { Observable, generate } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public lang = LANG;

  private produtos: Observable<any[]>;
  private produtosCollection: AngularFirestoreCollection<Produto[]>;


  constructor(private prodService: ProdutoService, private db: AngularFirestore) {
    this.produtosCollection = db.collection("produtos");
    this.produtos = this.prodService.produtosDb;
  }

  add(product: any) {
    // this.produtosCollection.add(product);

    this.produtosCollection.doc(this.generateId(this.produtosCollection)).set({
      product
    })

    // this.generateId(this.produtosCollection);
    // this.produtosCollection.doc(this.generateId(this.produtosCollection)).set(product);
  }

  counter(_x) {
    var sizeDocRef = this.produtosCollection.doc("sizeOfCollection");
    return sizeDocRef.update({
      size: sizeDocRef.get()+ _x
    })

    // var count: number = 0;
    // var result = count + _x;
    // console.log(result)
    // count++
  }

  //Dont working
  generateId(collection) {
    console.log(Object.keys(collection).length)
    return (Object.keys(collection).length + 1).toString();
  }

  delete(product: any) {
    this.produtosCollection.doc<any>(this.generateId(this.produtosCollection)).delete();
  }

  testing() {
    this.produtosCollection.doc("NAWwwAT35niDmU1bdVIS").delete()
  };



  //REALTIME DATABASE

  // public produtos: Observable<any[]>;
  // public produtosCollection: AngularFireList<Produto[]>;
  // public produtosRef: AngularFireList<any>;


  // constructor(private prodService: ProdutoService, private db: AngularFireDatabase) {
  //   this.produtosCollection = db.list("produtos");
  //   this.produtos = db.list('produtos').valueChanges();
  //   this.produtos.subscribe();
  //   console.log("hehe", this.produtos)

  //   this.produtosRef = db.list('/');
  //   // this.produtos = this.produtosRef.snapshotChanges().pipe(map(change =>
  //   //   change.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  //   // )
  //   // );
  // }

  // add(product: any) {
  //   this.produtosCollection.push(product);
  // }

  // edit(key, produto) {
  //   this.produtosRef.update(key, produto);
  // }

  // delete(key: any) {
  //   console.log(key)
  //   this.produtosCollection.remove(key)
  // }






  ngOnInit() { }
}
