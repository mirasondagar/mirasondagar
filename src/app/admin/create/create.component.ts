import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ServicesService } from 'src/app/services.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  loginForm: any
  usingdata: any
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      age: new FormControl('', [Validators.required,]),
      address: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      select: new FormControl('', [Validators.required])
    });
  }
  constructor(private userdata: ServicesService, public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userdata.fatchapi('products').subscribe((data) => {
      this.usingdata = data
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
      date: new Date(),
      name: this.loginForm.value.name,
      age: this.loginForm.value.age,
      address: this.loginForm.value.address,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      product: this.loginForm.value.select

    }
    this.userdata.fatchapiid('fakeData', payload).subscribe((data) => {
      this.dialogRef.close();
    })
  }
  onCancel() {
    this.dialogRef.close();
  }

  // this.user
  // foods: Food[] = [
  //   { value: 'steak-0', viewValue: 'Steak' },
  //   { value: 'pizza-1', viewValue: 'Pizza' },
  //   { value: 'tacos-2', viewValue: 'Tacos' },
  // ];

}
