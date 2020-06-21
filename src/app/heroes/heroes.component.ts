import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/IHero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: IHero[];
  selectedHero: IHero;
  
  constructor(private heroService: HeroService) { 
    
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroesOutput => this.heroes = heroesOutput);
  }
  onSelect(hero : IHero) : void {
    this.selectedHero = hero;
  }
}
