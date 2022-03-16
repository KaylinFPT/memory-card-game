import { Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-score-board-sm',
  templateUrl: './score-board-sm.component.html',
  styleUrls: ['./score-board-sm.component.scss']
})
export class ScoreBoardSmComponent implements OnInit {

  @Input() playerName!: string;
  @Input() score!: number;
  @Input() PlayerOneTurn!: boolean;
  @Input() imgSrc!: string;

  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

}
