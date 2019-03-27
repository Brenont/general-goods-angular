import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-modal-customizes',
  templateUrl: './modal-customizes.component.html',
  styleUrls: ['./modal-customizes.component.scss']
})
export class ModalCustomizesComponent implements OnInit {

  public textInput : string;

  constructor(public dialogRef: MatDialogRef<ModalCustomizesComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addItem() {
    if(this.textInput.trim() != "") {
      this.data.push(this.textInput);
      this.textInput = "";
    }
  }

  deleteItem(_index) {
    this.data.splice(_index, 1);
  }

  editItem(_index) {
    this.textInput = this.data[_index];
  }

  ngOnInit() {
  }

}
