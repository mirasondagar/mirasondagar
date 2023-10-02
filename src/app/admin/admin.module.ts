import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { ChartModule } from 'angular-highcharts';
import { ProductComponent } from './product/product.component';
import { MatSelectModule } from '@angular/material/select';
import { ViewComponent } from './view/view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { QRCodeModule } from 'angular2-qrcode';



@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    HeaderComponent,
    DeleteComponent,
    UpdateComponent,
    CreateComponent,
    ProductComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatMenuModule,
    ChartModule,
    MatSelectModule,
    MatPaginatorModule,



  ]
})
export class AdminModule { }

