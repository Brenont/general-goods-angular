import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProdutoService } from "src/app/services/produto.service";

@Component({
  selector: 'app-modal-sizes-edit',
  templateUrl: './modal-sizes-edit.component.html',
  styleUrls: ['./modal-sizes-edit.component.scss']
})
export class ModalSizesEditComponent implements OnInit {

  public descInput: string;
  public produto: any;

  constructor(
    public dialogRef: MatDialogRef<ModalSizesEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private produtoService: ProdutoService
  ) {
    this.produto = this.produtoService.productsRef
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  addDescription() {
    if (this.descInput != null || undefined) {
      this.produto.sizes.push(this.descInput);
      this.descInput = "";
    }
  }

  deleteItem(_index) {
    this.produto.sizes.splice(_index, 1);
  }

  // editItem(_index) {
  //   this.descInput = this.data[_index];
  // }

}
