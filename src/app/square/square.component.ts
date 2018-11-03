import { Component, OnInit, Input } from '@angular/core';
import { GameService } from "../game.service";

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() x: number;
  @Input() y: number;
  @Input() selected: boolean;
  @Input() active: boolean;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {}

  handleClick() {
    if (this.gameService.isValidMove(this.x, this.y)) {
      this.gameService.setActive(this.x, this.y);
      return true;
    }
    return false;
  }
}