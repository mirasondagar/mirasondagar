import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  dataSources: any
  searchtext: any
  ngOnInit(): void {

  }
  displayedColumns: string[] = ['Sr No', 'productName', 'state', 'city', 'country', 'createdOn', 'updatedOn', 'avatar', 'action'];
  dataSource = new MatTableDataSource<any>();

  // sort
  @ViewChild(MatSort) sort!: MatSort;
  // ngAfterViewInit() {
  //   // this.dataSources.sort = this.sort;
  // }

  // get data
  constructor(private userdata: ServicesService, public dialog: MatDialog) {
    this.fatchFun()
  }


  // search
  applyFilter(filterValue: any) {
    this.dataSources.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSources);
  }

  //create data
  // create() {
  //   let popup = this.dialog.open(CreateComponent, {
  //     width: '550px',
  //   });
  //   popup.afterClosed().subscribe(result => {
  //     this.fatchFun()
  //   });
  // }
  // // delete data
  // deletedata(element: any) {
  //   let popup = this.dialog.open(DeleteComponent, {
  //     width: '250px',
  //     data: element
  //   });
  //   popup.afterClosed().subscribe(result => {
  //     this.fatchFun()
  //   });
  // }
  // //update data
  // Editdata(element: any) {
  //   let popup = this.dialog.open(UpdateComponent, {
  //     width: '550px',
  //     data: element
  //   });
  //   // popup.afterClosed().subscribe(result => {
  //   //   this.fatchFun()
  //   // });
  // }vds.,gd   

  fatchFun() {
    this.userdata.fatchapi('products').subscribe((data: any) => {
      this.dataSources = new MatTableDataSource(data)
      this.dataSources.sort = this.sort;
    })
  }
}
