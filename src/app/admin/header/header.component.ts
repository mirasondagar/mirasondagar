import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any
  ngOnInit(): void {
    this.user = localStorage.getItem('todo')
    this.user = JSON.parse(this.user)
  }
  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('todo');
    this.router.navigate([''])

  }





}
