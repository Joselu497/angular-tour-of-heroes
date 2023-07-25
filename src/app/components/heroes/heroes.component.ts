import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero.model'
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes!: Hero[];
  selectedHero!: Hero | null;

  constructor(private heroService: HeroService) { }

  ngOnInit() { 
    this.getHeroes();
  }

  onSelect(hero: Hero | null): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    if(this.selectedHero===hero){
      this.onSelect(null);
    }
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}


