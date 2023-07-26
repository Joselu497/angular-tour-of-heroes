import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'heroes', component: HeroesComponent},
  { path: 'new-hero', component: NewHeroComponent },
  { path: 'edit-hero/:id', component: EditHeroComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}