import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor( 
    private http: HttpClient, 
    ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //return the Observable of heroes
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  //add hero to the server
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  //delete hero in the server
  deleteHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
  
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  //update hero in the server
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  //search heroes on the server
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //return posible error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
