import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../../services/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  buscarTexto: string; 
  heroes:Heroe[] = [];

  constructor( private _router:Router) { }


    ngOnInit() {
      
    }
  buscarHeroe(termino: string){
    // console.log(termino);
    if(termino.length >= 1){
      this._router.navigate(['/search', termino]);
    }
    
  }


  








}
