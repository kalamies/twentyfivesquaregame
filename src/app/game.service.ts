import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  selected = [];
  active = {
    x: <number> null,
    y: <number> null
  }

  constructor() { }

  setActive(x, y) {
    let newActive = {x: x, y: y};
    this.active = newActive;
    this.selected.push(newActive);
  }

  isSelected(x, y) {
    return this.selected.length > 0 && this.selected.find(square => 
      square.x === x && square.y === y
    )
  }

  isActive(x, y) {
    return this.active.x === x && this.active.y === y;
  }
  
  isValidMove(x, y) {
    // First item?
    if (this.active.x === null) return true;
    // Check move validity
    if (!this.isSelected(x, y) &&
        (
        (x - this.active.x === 2    || x - this.active.x === -2) &&
        (y - this.active.y === 2    || y - this.active.y === -2)
        ) ||
        (
        (x - this.active.x === 3    || x - this.active.x === -3) &&
        (y - this.active.y === 0)
        ) ||
        (
        (x - this.active.x === 0)                                &&
        (y - this.active.y === 3    || y - this.active.y === -3)
        )) {
      return true;
    }
    return false;
  }
}
