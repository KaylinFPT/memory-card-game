import { Injectable } from '@angular/core';
import { Player } from '../player';
@Injectable({
  providedIn: 'root'
})
export class MatchService {
  playerOneTurn: boolean = true;
  playerOne!: Player;
  playerTwo!: Player;
  constructor() { }

  increaseScoreP1(): number{
    this.playerOne.score += 10;

    return this.playerOne.score;
  }

  increaseScoreP2(): number{
    this.playerTwo.score += 10;

    return this.playerTwo.score
  }
}
