import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { LANG } from '../../../theme/pt';
import { Produto } from 'src/app/model/product';
import { Observable, generate } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalShowProductComponent } from 'src/app/components/modal-show-product/modal-show-product.component';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public lang = LANG;

  // public produtos: Observable<any[]>;
  public produtos: any;
  public orders: any;
  public produtoRef: any;
  public tabProducts: boolean = false;
  public tabOrders: boolean = true;
  
  constructor(
    private produtoService: ProdutoService,
    private orderService: OrderService,
    private uploadImgService: UploadImgService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private dialog: MatDialog) {
    this.produtos = this.produtoService.products;
    this.orders = this.orderService.orders;
    // this.produtoRef = this.produtoService.products;

  }

  ngOnInit() {
    this.afAuth.idToken.subscribe(login => {
      // console.log('1', login)
      // this.login = login
      if (login == null) {
        this.router.navigate(['/login'])
      }
    });
  }

  btnTabProducts() {
    this.tabOrders = false;
    this.tabProducts = true;
  }

  btnTabOrders() {
    this.tabProducts = false;
    this.tabOrders = true;
  }

  add(product) {
    console.log("click to add")
    this.produtoService.addProduct(product);
  }

  delete(product) {
    this.produtoService.deleteProduct(product);
  }

  update(product, changes) {
    this.produtoService.update(product, changes);
  }

  generateKey() {
    return this.produtoService.generateKey();
  }

  uploadFile(event) {
    this.uploadImgService.uploadFile(event);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  showDialogEdit() {
    console.log(this.produtoRef)
    this.dialog.open(ModalShowProductComponent)
  }
  edit(produto) {
    this.produtoService.edit(produto)
  }



}
