import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ModalFormComponent } from 'src/app/modals/modal-form/modal-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public produto: any;
  public descriptions = [];

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog,
  ) {
    this.produto = this.produtoService.productsRef
  }

  ngOnInit() {
  }

  add(product, change) {
    console.log("click to add");
    this.produtoService.update(product,change);
  }

  addDescription(text) {
    this.descriptions.push(text);
  }
  
  OpenModalDescription(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      minWidth: "280px",
      maxWidth: "500px",
      width: "auto",
      data: this.descriptions
    });
  }
}
