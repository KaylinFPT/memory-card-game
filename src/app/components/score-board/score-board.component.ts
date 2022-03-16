import { Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

  @Input() playerName!: string;
  @Input() score!: number;
  @Input() PlayerOneTurn!: boolean;
  @Input() imgSrc!: string;

  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

}
