import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../model/product';
import { HttpClient } from 'selenium-webdriver/http';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Array<Produtos> = [];

  public url = "test-url";

  // constructor(private http: HttpClient) { }

  // getProdutos(): Observable<Produtos[]> {
  //   return this.http.send(this.url);
  // }

  // PostProduto(produtos) {
  //   return this.http.send(produtos);
  // }

  DeleteProduto() {

  }

  UpdateProduto(){

  }
}
