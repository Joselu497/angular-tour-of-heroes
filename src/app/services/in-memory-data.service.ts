import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id:1 ,name:'Sebille' ,class:'Rogue', race: 'Elf',attributes: {
        strength:10,
        finesse: 12,
        intelligence: 10,
        constitution: 10,
        memory: 10,
        wits: 12
    }},
    {id:2 ,name:'Red Prince' ,class:'Fighter', race: 'Lizard',attributes: {
        strength:11,
        finesse: 10,
        intelligence: 10,
        constitution: 12,
        memory: 10,
        wits: 10
    }},
    {id:3 ,name:'Lohse' ,class:'Enchanter', race: 'Human',attributes: {
        strength:10,
        finesse: 10,
        intelligence: 12,
        constitution: 11,
        memory: 10,
        wits: 10
    }},
    {id:4 ,name:'Ifan Ben-Mezd' ,class:'Wayfarer', race: 'Human',attributes: {
        strength:10,
        finesse: 12,
        intelligence: 11,
        constitution: 10,
        memory: 10,
        wits: 10
    }},
    {id:5 ,name:'Beast' ,class:'Battlemage', race: 'Dwarf',attributes: {
        strength:11,
        finesse: 10,
        intelligence: 11,
        constitution: 11,
        memory: 10,
        wits: 10
    }},
    {id:6 ,name:'Fane' ,class:'Wizard', race: 'Undead',attributes: {
        strength:10,
        finesse: 10,
        intelligence: 12,
        constitution: 11,
        memory: 10,
        wits: 10
    }},
    ];
    return {heroes};
  }
}