import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { IHero } from '../interfaces/IHero';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../services/message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  className;

  constructor(private messageSerivce: MessageService) { 
    this.className = this.constructor.name;
  }

  getHeroes(): Observable<IHero[]> {
    this.messageSerivce.add(this.className + ": fetched heroes")
    return of(HEROES);
  }
}
