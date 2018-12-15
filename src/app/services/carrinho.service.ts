import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Produto } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private subject = new Subject<any>();

  sendProduct(productAdded) {
    this.subject.next(productAdded);
  }

  getProduct(): Observable<any> {
    return this.subject.asObservable();
  }


  constructor() { }
}
