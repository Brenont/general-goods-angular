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
    console.log(product.key)
    this.produtosCollection.doc(product.key).set(product)
  }
  
  delete(product: any) {
    // this.produtosCollection.doc<any>(this.generateId(this.produtosCollection)).delete();
    this.produtosCollection.doc(product.key).delete()
  }

  update(product){
    this.produtosCollection.doc(product.key).update({product})
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

  ngOnInit() { }
}
