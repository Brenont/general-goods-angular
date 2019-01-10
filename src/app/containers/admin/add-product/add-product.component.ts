import { Component, OnInit } from '@angular/core';
import { LANG } from '../../../../theme/pt'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public lang = LANG;

  constructor() { }

  ngOnInit() {
  }

}
