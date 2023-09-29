import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userdata: ServicesService) { }

  onCancel() {
    this.dialogRef.close();
  }
  onCan(data: any) {
    this.userdata.fatchapidlt('fakeData', data.id).subscribe((res) => {
      this.dialogRef.close();
    })

  }

}
