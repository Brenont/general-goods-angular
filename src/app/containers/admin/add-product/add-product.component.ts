import { Component, OnInit, Inject } from "@angular/core";
import { LANG } from "../../../../theme/pt";
import { ProdutoService } from "src/app/services/produto.service";
import { UploadImgService } from "src/app/services/upload-img.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalFormComponent } from "src/app/modals/modal-form/modal-form.component";
import { ModalFeaturesComponent } from "src/app/modals/modal-features/modal-features.component";
import { ModalSizesComponent } from "src/app/modals/modal-sizes/modal-sizes.component";
import { ModalCustomizesComponent } from "src/app/modals/modal-customizes/modal-customizes.component";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
// import { DialogData } from './DialogData';

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  public lang = LANG;

  public descriptions = [];
  public sizes = [];
  public customizes = [];
  public features = [];
  public name: string;
  public nameInput: string;
  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;
  public photoProduct:any = '';
  // animal: string;

  constructor(
    private prodService: ProdutoService,
    private uploadImgService: UploadImgService,
    public dialog: MatDialog,
    private storage: AngularFireStorage,
  ) {
   }

  ngOnInit() { }

  addDescription(text) {
    this.descriptions.push(text);
  }

  add(product) {
    console.log("click to add");
    this.prodService.addProduct(product);
  }

  generateKey() {
    return this.prodService.generateKey();
  }

  // uploadFile(event) {
  //   this.uploadImgService.uploadFile(event);
  // }

  OpenModalDescription(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      minWidth: "280px",
      maxWidth: "500px",
      width: "auto",
      data: this.descriptions
    });
  }

  OpenModalFeatures(): void {
    const dialogRef = this.dialog.open(ModalFeaturesComponent, {
      minWidth: "280px",
      maxWidth: "500px",
      width: "auto",
      data: this.features
    });
  }

  OpenModalSizes(): void {
    const dialogRef = this.dialog.open(ModalSizesComponent, {
      minWidth: "280px",
      maxWidth: "500px",
      width: "auto",
      data: this.sizes
    });
  }

  OpenModalCustomizes(): void {
    const dialogRef = this.dialog.open(ModalCustomizesComponent, {
      minWidth: "280px",
      maxWidth: "500px",
      width: "auto",
      data: this.customizes
    });
  }

  buildProduct() {
    var product = {
      name: this.name,
      key: this.generateKey(),
      descriptions: this.descriptions,
      features: this.features,
      sizes: this.sizes,
      // extras: string[],
      img: this.photoProduct,
      customizes: this.customizes,
      // nucleoOption: boolean,
    }
    console.log(product);
    this.add(product);
  }

  uploadFile(event) {
    console.log(event)
    // this.spinner = true;
    const file = event.target.files[0]
    let r = Math.random().toString(36).substring(7);
    const filePath = r;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.photoProduct = fileRef.getDownloadURL().subscribe(
        link => {
          this.photoProduct = link.toString()
          // this.spinner = false;
          console.log('up feito com sucesso',this.photoProduct)
        }
      )
      ),
    )
      .subscribe()
  }

}
