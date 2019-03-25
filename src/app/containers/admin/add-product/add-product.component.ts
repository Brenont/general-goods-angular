import { Component, OnInit, Inject } from '@angular/core';
import { LANG } from '../../../../theme/pt'
import { ProdutoService } from 'src/app/services/produto.service';
import { UploadImgService } from 'src/app/services/upload-img.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalFormComponent } from 'src/app/modals/modal-form/modal-form.component';
// import { DialogData } from './DialogData';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public lang = LANG;

  public descriptions = ["Muito show", "tem rodas"];
  public sizes = [];
  public customizes = [];
  public features = [];
  public name : string;

  animal : string;

  constructor(private prodService: ProdutoService, private uploadImgService: UploadImgService, public dialog: MatDialog) { }

  addDescription(text) {
    this.descriptions.push(text);
  }

  buildProduct() {

  }

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

  OpenModalDescription(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '250px',
      data: this.descriptions
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}
