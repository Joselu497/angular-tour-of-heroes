import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../models/hero.model'
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})

export class NewHeroComponent implements OnInit{

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  heroes!: Hero[];
  hero: Hero = {id:0 ,name: '',class: '', race: '', attributes:{
    strength:10,
    finesse: 10,
    intelligence: 10,
    constitution: 10,
    memory: 10,
    wits: 10
  }}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back();
  }

  add(form: any): void {
    if(form.valid) {
      this.hero.id = this.heroes.length > 0 ? Math.max(...this.heroes.map(hero => hero.id)) + 1 : 11;
      this.hero.name=form.value.name.trim();
      this.hero.class=form.value.class;
      this.hero.race=form.value.race;

      this.heroService.addHero(this.hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.goBack();
      });
    }
  }
  
  

}
