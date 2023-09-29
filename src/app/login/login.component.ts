import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userdata: ServicesService, private router: Router) { }
  hide = true;
  fatchdata: any

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])

  })
  userLogin() {
    let payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.usingForm()
  }
  finddata: any

  usingForm() {
    this.userdata.fatchapi('fakeData').subscribe((data) => {
      this.fatchdata = data
      if (this.finddata = this.fatchdata.find((item: any) => item.email === this.loginForm.value.email)) {
        if (this.fatchdata.find((item: any) => item.password === this.loginForm.value.password && item.email === this.loginForm.value.email)) {
          let user = (this.fatchdata.find((item: any) => item.password === this.loginForm.value.password) && this.fatchdata.find((item: any) => item.email === this.loginForm.value.email))
          this.Save('todo', user)

          this.router.navigate(['admin/home'])
        }
      } else {
        confirm('this form is not valid')
      }

    })
  }
  Save(key: any, user: any) {
    localStorage.setItem("todo", JSON.stringify(user));
  }
}
