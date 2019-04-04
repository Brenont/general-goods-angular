import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProdutoService } from "src/app/services/produto.service";
@Component({
  selector: 'app-modal-features-edit',
  templateUrl: './modal-features-edit.component.html',
  styleUrls: ['./modal-features-edit.component.scss']
})
export class ModalFeaturesEditComponent implements OnInit {

  public descInput: string;
  public produto: any;

  constructor(
    public dialogRef: MatDialogRef<ModalFeaturesEditComponent>,
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
    console.log(this.produto.features, 'opa')

    if (this.descInput.trim() != "") {
      this.produto.features.push(this.descInput);
      this.descInput = "";
    }
  }

  deleteItem(_index) {
    this.produto.features.splice(_index, 1);
  }

}
