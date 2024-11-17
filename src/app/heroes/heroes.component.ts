import { Component } from '@angular/core';
import  { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', //used as "<app-heroes></app-heroes>"" in  app.component.html
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes :Hero[] = [];
  
  // ** variable below is no longer used 
  // selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // **Original
    // this.heroes = this.heroService.getHeroes();

    // **Subscribe
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    /** If you neglect to subscribe(), the service can't send the delete request to the server. 
     * As a rule, an Observable does nothing until something subscribes.
    **/
    this.heroService.deleteHero(hero.id).subscribe();
  }

  // ** method below is no longer used
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }

}
