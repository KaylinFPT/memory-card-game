import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardData } from 'src/app/CardData'; 
import { MatDialog } from '@angular/material/dialog';
//mport { RestartDialogComponent } from '../restart-dialog/restart-dialog.component'; 
import { MatchService } from 'src/app/services/match.service'; 
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { RestartDialogComponent } from '../restart-dialog/restart-dialog.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  mediaSub!:Subscription;

  PlayerOneName!:string;
  PlayerTwoName!:string;
  PlayerOneScore!:number;
  PlayerTwoScore!:number;
  playerOneImg : string  ='assets/player1.png';
  playerTwoImg : string  ='assets/player2.png';

  cardImages = [
    '10_of_clubs.png',
'10_of_diamonds.png',
'10_of_hearts.png',
'10_of_spades.png',
'2_of_clubs.png',
'2_of_diamonds.png',
'2_of_hearts.png',
'2_of_spades.png',
'3_of_clubs.png',
'3_of_diamonds.png',
'3_of_hearts.png',
'3_of_spades.png',
'4_of_clubs.png',
'4_of_diamonds.png',
'4_of_hearts.png',
'4_of_spades.png',
'5_of_clubs.png',
'5_of_diamonds.png',
'5_of_hearts.png',
'5_of_spades.png',
'6_of_clubs.png',
'6_of_diamonds.png',
'6_of_hearts.png',
'6_of_spades.png',
'7_of_clubs.png',
'7_of_diamonds.png',
'7_of_hearts.png',
'7_of_spades.png',
'8_of_clubs.png',
'8_of_diamonds.png',
'8_of_hearts.png',
'8_of_spades.png',
'9_of_clubs.png',
'9_of_diamonds.png',
'9_of_hearts.png',
'9_of_spades.png',
'ace_of_clubs.png',
'ace_of_diamonds.png',
'ace_of_hearts.png',
'ace_of_spades.png',
'joker_of_clubs.png',
'jack_of_clubs.png',
'jack_of_diamonds.png',
'jack_of_hearts.png',
'jack_of_spades.png',
'king_of_clubs.png',
'king_of_diamonds.png',
'king_of_hearts.png',
'king_of_spades.png',
'queen_of_clubs.png',
'queen_of_diamonds.png',
'queen_of_hearts.png',
'queen_of_spades.png',
'joker_of_spades.png'
    
  ];

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;
  deviceXs!:boolean;

  constructor(private dialog: MatDialog, public match: MatchService, public mediaObserver: MediaObserver) {

  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange) =>{
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'sm' ? true : false;
    })
    this.setupCards();

    this.PlayerOneName = this.match.playerOne.name;
    this.PlayerTwoName = this.match.playerTwo.name;
    this.PlayerOneScore = this.match.playerOne.score;
    this.PlayerTwoScore = this.match.playerTwo.score;
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  
  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

setupCards(): void {``
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({ ...cardData });
     

    });

    this.cards = this.shuffleArray(this.cards);
}

cardClicked(index: number): void {
  const cardInfo = this.cards[index];
  
  if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
    cardInfo.state = 'flipped';
    this.flippedCards.push(cardInfo);

    if (this.flippedCards.length > 1) {
      this.checkForCardMatch();
    }

  } else if (cardInfo.state === 'flipped') {
    cardInfo.state = 'default';
    this.flippedCards.pop();

  }

 
}

checkForCardMatch(): void {
  setTimeout(() => {
    const cardOne = this.flippedCards[0];
    const cardTwo = this.flippedCards[1];

    var CardOneName = cardOne.imageId;
    var CardTwoName = cardTwo.imageId;

    if ((CardOneName.split("_")[2] == "spades.png" && CardTwoName.split("_")[2] == "clubs.png") || ((CardTwoName.split("_")[2] == "spades.png" && CardOneName.split("_")[2] == "clubs.png")))
    {
      if (CardOneName.split("_")[0] == CardTwoName.split("_")[0]) {
        CardOneName = CardTwoName;
        
        if (this.match.playerOneTurn) {
          this.PlayerOneScore = this.match.increaseScoreP1();
        }
        else{
          this.PlayerTwoScore = this.match.increaseScoreP2();
        }

        
        
      }

      else{
        this.match.playerOneTurn =!this.match.playerOneTurn
      }
    

    }

    else if((CardOneName.split("_")[2] == "hearts.png" && CardTwoName.split("_")[2] == "diamonds.png") || ((CardTwoName.split("_")[2] == "hearts.png" && CardOneName.split("_")[2] == "diamonds.png"))){
      
      if (CardOneName.split("_")[0] == CardTwoName.split("_")[0]) {
      
        CardOneName = CardTwoName;
        if (this.match.playerOneTurn) {
          this.PlayerOneScore = this.match.increaseScoreP1();
        }
        else{
          this.PlayerTwoScore = this.match.increaseScoreP2();
        }
       

      }
      else{
        this.match.playerOneTurn = !this.match.playerOneTurn;
      }
    }

    else{
      this.match.playerOneTurn = !this.match.playerOneTurn;
    }

    const nextState = CardOneName === CardTwoName ? 'matched' : 'default';
    cardOne.state = cardTwo.state = nextState;

    this.flippedCards = [];

    if (nextState === 'matched') {
      this.matchedCount++;

      if (this.matchedCount === 27) {
        const dialogRef = this.dialog.open(RestartDialogComponent, {
          disableClose: true,
          data: {player : this.PlayerOneScore > this.PlayerTwoScore ? this.PlayerOneName : this.PlayerTwoName}
        });

        dialogRef.afterClosed().subscribe(() => {
          this.restart();
        });
      }
    }

  }, 1200);}

restart(): void {
  this.matchedCount = 0;
  this.PlayerOneScore = 0;
  this.PlayerTwoScore = 0;
  this.match.playerOneTurn = true;
  this.setupCards();
}


}
