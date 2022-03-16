import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatchService } from 'src/app/services/match.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private dialog: MatDialog,private match: MatchService,private router: Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '550px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      //this.players = result.split(",");

      if (result) {
        this.match.playerOne = {
          name : result.split(",")[0],
          score : 0
    
        }
    
        this.match.playerTwo = {
          name :  result.split(",")[1],
          score : 0
    
        }

        this.router.navigate(['/board']);
        
      }
      
    });
   
  }

}
