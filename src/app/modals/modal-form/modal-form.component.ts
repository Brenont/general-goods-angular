import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// import { DialogData } from '../DialogData';

@Component({
  selector: "app-modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.scss"]
})
export class ModalFormComponent implements OnInit {

  public descInput : string;

  constructor( public dialogRef: MatDialogRef<ModalFormComponent>, @Inject(MAT_DIALOG_DATA) public data) {  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addDescription() {
    if(this.descInput.trim() != "") {
      this.data.push(this.descInput);
      this.descInput = "";
    }
  }

  deleteItem(_index) {
    this.data.splice(_index, 1);
  }

  editItem(_index) {
    this.descInput = this.data[_index];
  }

  ngOnInit() {}
}
