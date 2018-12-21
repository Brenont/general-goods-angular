import { Component, OnInit } from '@angular/core';
import { ProdutoService, produtos } from 'src/app/services/produto.service';
import { LANG } from '../../../theme/pt';
import { Produto } from 'src/app/model/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public lang = LANG;

  private produtos: Observable<any[]>;
  private produtosCollection: AngularFirestoreCollection<any>;
  

  constructor(private prodService: ProdutoService, private db: AngularFirestore) {
    this.produtosCollection = db.collection("produtos");
    this.produtos = this.prodService.produtosDb;
  }


  add(product: any) {
    this.produtosCollection.add(product);
  }

  ngOnInit() {}
}
