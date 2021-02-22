import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.scss']
})
export class EditAvatarComponent implements OnInit {

  imgPreviewBig: string;
  imgPreviewMed: string;
  imgPreviewSmall: string;
  formTemplate = new FormGroup({
    imageUrl: new FormControl(''),
  });
  selectedImg: any = null;
  isSubmit: boolean = false;
  userAuth;

  constructor(private storage: AngularFireStorage, private userService: UserService) {
  }

  ngOnInit(): void {
    console.log(UserService.userAuth);
    this.userAuth = UserService.userAuth;
    this.imgPreviewBig = this.userAuth.PhotoUrl;
    this.imgPreviewMed = this.userAuth.PhotoUrl;
    this.imgPreviewSmall = this.userAuth.PhotoUrl;
  }

  showPreview(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgPreviewBig = e.target.result;
        this.imgPreviewMed = e.target.result;
        this.imgPreviewSmall = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
      console.log(this.selectedImg);
    } else {
      this.imgPreviewBig = this.userAuth.PhotoUrl;
      this.imgPreviewMed = this.userAuth.PhotoUrl;
      this.imgPreviewSmall = this.userAuth.PhotoUrl;
      this.selectedImg = null;
    }
  }

  onSubmit(formValue): void {
    this.isSubmit = true;
    if (this.formTemplate.valid) {
      const imgPath = this.userAuth.userID + '/' + 'avatar';
      const fileRef = this.storage.ref(imgPath);
      this.storage.upload(imgPath, this.selectedImg).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.userService.updateAvatar(url);
            formValue['imageUrl'] = url;
            console.log(url);
            this.resetForm();
          });
        })
      ).subscribe();
    }
  }

  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: '',
    });
    this.isSubmit = false;
    this.selectedImg = null;
    this.imgPreviewBig = this.userAuth.PhotoUrl;
    this.imgPreviewMed = this.userAuth.PhotoUrl;
    this.imgPreviewSmall = this.userAuth.PhotoUrl;
  }
}
