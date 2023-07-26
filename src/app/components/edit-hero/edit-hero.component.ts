import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../models/hero.model'
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit{
  @Input() hero!: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.heroService.getHero(parseInt(id))
        .subscribe(hero => this.hero = hero);
    }
    console.log(this.hero)
  }

  goBack(): void {
    this.location.back();
  }

  save(form: any): void { 
    if(form.valid) {
      this.hero.name=form.value.name.trim();
      this.hero.class=form.value.class;
      this.hero.race=form.value.race;
    }

    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
