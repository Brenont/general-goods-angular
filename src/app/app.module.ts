import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatoComponent } from './containers/contato/contato.component';
import { QmsomosComponent } from './containers/qmsomos/qmsomos.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { AgmCoreModule } from '@agm/core';

// import { environment } from '../environments/environment';
import { ModalSetupComponent } from './components/modal-setup/modal-setup.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { AdminComponent } from './containers/admin/admin.component';
import { LoginComponent } from './containers/login/login.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarrinhoComponent } from './containers/carrinho/carrinho.component';
import { CarrinhoService } from './services/carrinho.service';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from "@angular/fire/database";
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AddProductComponent } from './containers/admin/add-product/add-product.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContatoComponent,
    QmsomosComponent,
    ProdutosComponent,
    ModalSetupComponent,
    ProductModalComponent,
    ModalSetupComponent,
    AdminComponent,
    LoginComponent,
    InputFormComponent,
    CarrinhoComponent,
    CartButtonComponent,
    AdminMenuComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SlickCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGgHmDeD5_Q7Mh5sUPgaQKOtPE6vElSWA'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpClient,
    CarrinhoService,
    AngularFirestore,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


// https://maps.googleapis.com/maps/api/js?key=AIzaSyBGgHmDeD5_Q7Mh5sUPgaQKOtPE6vElSWA&callback=initMap
