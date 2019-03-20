import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;
  public photo3

  constructor(private storage: AngularFireStorage) { }

  uploadFile(event) {
    const file = event.target.files[0];
    let r = Math.random().toString(36).substring(7);
    const filePath = r;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.photo3 = fileRef.getDownloadURL().subscribe(
          link =>{
            this.photo3 = link.toString()
          }
        )
        ),
     )
    .subscribe()
  }
}
