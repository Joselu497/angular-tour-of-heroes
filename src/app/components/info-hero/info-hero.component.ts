import { Component, Input } from '@angular/core';

import { Hero } from '../../models/hero.model'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css']
})

export class InfoHeroComponent {
  @Input() hero!: Hero;
}

