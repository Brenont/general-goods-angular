import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-modal-features',
  templateUrl: './modal-features.component.html',
  styleUrls: ['./modal-features.component.scss']
})
export class ModalFeaturesComponent implements OnInit {

  public featureInput : string;

  constructor(public dialogRef: MatDialogRef<ModalFeaturesComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addItem() {
    if(this.featureInput.trim() != "") {
      this.data.push(this.featureInput);
      this.featureInput = "";
    }
  }

  deleteItem(_index) {
    this.data.splice(_index, 1);
  }

  editItem(_index) {
    this.featureInput = this.data[_index];
  }

  ngOnInit() {
  }

}
