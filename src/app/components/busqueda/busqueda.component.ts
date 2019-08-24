import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes = [];
  termino: string;
  constructor(private _activatedRoute:ActivatedRoute, 
              private _heroesService:HeroesService,
              private _router:Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }

  verHeroe(i:number){
    this._router.navigate(['heroe', i]);
  }


}
