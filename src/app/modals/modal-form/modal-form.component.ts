import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProdutoService } from "src/app/services/produto.service";
// import { DialogData } from '../DialogData';

@Component({
  selector: "app-modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.scss"]
})
export class ModalFormComponent implements OnInit {

  public descInput : string;
  public produto: any;

  constructor( public dialogRef: MatDialogRef<ModalFormComponent>, @Inject(MAT_DIALOG_DATA) public data,
  private produtoService: ProdutoService
  ) { 
    this.produto = this.produtoService.productsRef
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.produto.descriptions,'opa')
  }

  addDescription() {
    if(this.descInput.trim() != "") {
      this.data.push(this.descInput);
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
