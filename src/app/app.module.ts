import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    InfoHeroComponent,
    NewHeroComponent,
    DashboardComponent,
    NavBarComponent,
    EditHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatButtonToggleModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
