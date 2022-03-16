import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-restart-dialog',
  templateUrl: './restart-dialog.component.html',
  styleUrls: ['./restart-dialog.component.scss']
})
export class RestartDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

}
