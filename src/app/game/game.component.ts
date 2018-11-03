import { Component, OnInit, Input } from '@angular/core';
import { GameService } from "../game.service";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() size: number;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }
  
  indexArray() {
    return Array(this.size).fill(0).map((x, i) => i);
  }

}
