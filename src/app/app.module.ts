import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/Forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { BoardComponent } from './components/board/board.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ScoreBoardSmComponent } from './components/score-board-sm/score-board-sm.component';
import { RestartDialogComponent } from './components/restart-dialog/restart-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    MenuComponent,
    PopUpComponent,
    BoardComponent,
    ScoreBoardComponent,
    ScoreBoardSmComponent,
    RestartDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,FlexLayoutModule ,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
