import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  loginForm = new FormGroup({
    date: new FormControl('', [Validators.required,]),
    name: new FormControl('', [Validators.required,]),
    age: new FormControl('', [Validators.required,]),
    address: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  dataSources: any
  id: any
  ngOnInit(): void { }
  constructor(private userdata: ServicesService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fatchadata()
  }
  fatchadata() {
    // this.userdata.fatchapiset('fakeData', this.data).subscribe((data: any) => {
    this.dataSources = this.data
    this.loginForm.patchValue({
      date: this.dataSources.date,
      name: this.dataSources.name,
      age: this.dataSources.age,
      address: this.dataSources.address,
      email: this.dataSources.email,
      password: this.dataSources.password,
    })


  }
  getErrorMessage() {
    if (this.loginForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

  //
  userLogin() {
    let payload = {
      date: this.loginForm.value.date,
      name: this.loginForm.value.name,
      age: this.loginForm.value.age,
      address: this.loginForm.value.address,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,

    }
    this.userdata.fatchapiupdate('fakeData', this.data.id, payload,).subscribe((data) => {
      this.dialogRef.close();
    })
  }

}
