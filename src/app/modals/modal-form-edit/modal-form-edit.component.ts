import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProdutoService } from "src/app/services/produto.service";
@Component({
  selector: 'app-modal-form-edit',
  templateUrl: './modal-form-edit.component.html',
  styleUrls: ['./modal-form-edit.component.scss']
})
export class ModalFormEditComponent implements OnInit {


  public descInput: string;
  public produto: any;

  constructor(
    public dialogRef: MatDialogRef<ModalFormEditComponent>,
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
    console.log(this.produto.descriptions, 'opa')

    if (this.descInput.trim() != "") {
      this.produto.descriptions.push(this.descInput);
      this.descInput = "";
    }
  }

  deleteItem(_index) {
    this.produto.descriptions.splice(_index, 1);
  }

  editItem(_index) {
    this.descInput = this.data[_index];
  }

}
