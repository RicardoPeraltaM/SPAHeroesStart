import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/Hero.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // variable que almacena la respuesta del metodo getHero que se encuentra el el servicio _heroService
  hero: any = {};

  constructor( private _aRoute: ActivatedRoute, private _heroService: HeroService) {
    this._aRoute.params.subscribe( params => {
      this.hero = this._heroService.getHero(params['id']);
      console.log(this.hero);
    });
   }

  ngOnInit(): void {
  }

}
