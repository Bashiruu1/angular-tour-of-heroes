import { Injectable } from '@angular/core';
import { IHero } from '../interfaces/IHero';
import { HEROES } from '../mock-heroes';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): IHero[] {
    return HEROES;
  }
  constructor() { }
}
