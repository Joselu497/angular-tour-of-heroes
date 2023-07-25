import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  { path: 'new-hero', component: NewHeroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}