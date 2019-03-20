import { Component, OnInit } from '@angular/core';
import { ProdutoService, produtos } from 'src/app/services/produto.service';
import { LANG } from '../../../theme/pt';
import { Produto } from 'src/app/model/product';
import { Observable, generate } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UploadImgService } from 'src/app/services/upload-img.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public lang = LANG;

  private produtos: Observable<any[]>;

  constructor(private prodService: ProdutoService, private uploadImgService: UploadImgService) {
    this.produtos = this.prodService.produtosDb;
  }

  add(product) {
    console.log("click to add")
    this.prodService.addProduct(product);
  }

  delete(product) {
    this.prodService.deleteProduct(product);
  }

  update(product, changes) {
    this.prodService.update(product, changes);
  }

  generateKey(){
    return this.prodService.generateKey();
  }

  uploadFile(event){
    this.uploadImgService.uploadFile(event);
  }

  ngOnInit() { }
}
