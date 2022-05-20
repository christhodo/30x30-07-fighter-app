import { Component, OnInit } from '@angular/core';
import { FightersService } from '../common/models/services/fighters.service';
import { Fighter } from '../common/models/fighters';

const emptyFighter: Fighter = {
  id: null,
  name: '',
  division: '',
  wins: 0,
  losses: 0,
};

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.scss'],
})
export class FightersComponent implements OnInit {
  fighters = [];
  selectedFighter = emptyFighter;
  originalName = '';

  constructor(private fightersService: FightersService) {}

  ngOnInit(): void {
    this.fetchFighters();
  }

  selectFighter(fighter) {
    this.selectedFighter = { ...fighter };
    this.originalName = fighter.name;
  }

  fetchFighters() {
    this.fightersService
      .all()
      .subscribe((result: any) => (this.fighters = result));
  }

  saveFighter(fighter) {
    if (fighter.id) {
      this.updateFighter(fighter);
    } else {
      this.createFighter(fighter);
    }
  }

  createFighter(fighter) {
    this.fightersService
      .create(fighter)
      .subscribe((result) => this.fetchFighters());
  }

  updateFighter(fighter) {
    this.fightersService
      .update(fighter)
      .subscribe((result) => this.fetchFighters());
  }

  deleteFighter(fighterId) {
    console.log('delete fighter', fighterId);
  }

  reset() {
    this.selectFighter({ ...emptyFighter });
  }
}
