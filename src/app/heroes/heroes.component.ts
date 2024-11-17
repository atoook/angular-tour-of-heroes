import { Component } from '@angular/core';
import  { Hero } from '../hero';

@Component({
  selector: 'app-heroes', //used as "<app-heroes></app-heroes>"" in  app.component.html
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
