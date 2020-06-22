import { Component, OnInit } from '@angular/core';

import { IHero } from '../interfaces/IHero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero: IHero;
  heroes: IHero[];  
  className: string;
  
  constructor(private heroService: HeroService, private messageService: MessageService) { 
    this.className = this.constructor.name;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero : IHero) : void {
    this.selectedHero = hero;
    this.messageService.add(this.className + `: Selected hero id=${hero.id}`);    
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroesOutput => this.heroes = heroesOutput);
  }
}
