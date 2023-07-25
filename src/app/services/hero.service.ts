import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor( private http: HttpClient, private router: Router ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    this.router.navigate(['/heroes'])
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
  
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
