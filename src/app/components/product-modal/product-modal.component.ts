import { Component, OnInit, Input } from '@angular/core';
// import { Produto } from 'src/app/model/product';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  @Input() list;
  constructor() { }

  ngOnInit() {
  }

}
