import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ServicesService } from 'src/app/services.service';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
import { ViewComponent } from '../view/view.component';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSources: any
  searchtext: any
  ngOnInit(): void {

  }
  displayedColumns: string[] = ['Sr No', 'date', 'name', 'age', 'address', 'view', 'avatar', 'action'];
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
  create() {
    let popup = this.dialog.open(CreateComponent, {
      width: '550px',
    });
    popup.afterClosed().subscribe(result => {
      this.fatchFun()
    });
  }
  // delete data
  deletedata(element: any) {
    let popup = this.dialog.open(DeleteComponent, {
      width: '250px',
      data: element
    });
    popup.afterClosed().subscribe(result => {
      this.fatchFun()
    });
  }
  //update data
  Editdata(element: any) {
    let popup = this.dialog.open(UpdateComponent, {
      width: '550px',
      data: element
    });
    popup.afterClosed().subscribe(result => {
      this.fatchFun()
    });
  }
  view(element: any) {
    let popup = this.dialog.open(ViewComponent, {
      width: '300px',
      data: element
    });
  }

  fatchFun() {
    this.userdata.fatchapi('fakeData').subscribe((data: any) => {
      this.dataSources = new MatTableDataSource(data)
      this.dataSources.sort = this.sort;
    })
  }








}
