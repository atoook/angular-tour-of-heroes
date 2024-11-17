import { Component } from '@angular/core';
import  { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', //used as "<app-heroes></app-heroes>"" in  app.component.html
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
