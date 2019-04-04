import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ModalFormComponent } from 'src/app/modals/modal-form/modal-form.component';
import { MatDialog } from '@angular/material';
import { ModalFormEditComponent } from 'src/app/modals/modal-form-edit/modal-form-edit.component';
import { ModalFeaturesEditComponent } from 'src/app/modals/modal-features-edit/modal-features-edit.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public produto: any;
  public descriptions = [];
  public features = [];

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog,
  ) {
    this.produto = this.produtoService.productsRef
  }

  ngOnInit() {
  }

  add(product) {
    var productt = {
      descriptions: this.produto.descriptions,
      features: this.produto.features,
    }
    this.produtoService.update(product, productt);
  }

  addDescription(text) {
    this.descriptions.push(text);
  }
  // buildProduct() {
  //   var product = {
  //     descriptions: this.descriptions,

  //   }
  //   this.produtoService.addProduct(product);
  // }

  OpenModalDescription(): void {
    const dialogRef = this.dialog.open(ModalFormEditComponent, {
      minWidth: "280px",
      maxWidth: "500px",
      width: "auto",
      data: this.descriptions
    });
  }

  OpenModalFeatures(): void {
    const dialogRef = this.dialog.open(ModalFeaturesEditComponent, {
      minWidth: "280px",
      maxWidth: "500px",
      width: "auto",
      data: this.features
    });
  }
}
