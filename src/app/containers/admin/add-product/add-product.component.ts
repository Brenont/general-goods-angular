import { Component, OnInit } from '@angular/core';
import { LANG } from '../../../../theme/pt'
import { ProdutoService } from 'src/app/services/produto.service';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public lang = LANG;

  constructor(private prodService: ProdutoService, private uploadImgService: UploadImgService) { }

  add(product) {
    console.log("click to add")
    this.prodService.addProduct(product);
  }

  generateKey(){
    return this.prodService.generateKey();
  }

  uploadFile(event){
    this.uploadImgService.uploadFile(event);
  }

  ngOnInit() {
  }

}
