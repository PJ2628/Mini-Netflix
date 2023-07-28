import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from './pelicula';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  constructor(private inicioService: InicioService, private router:Router,
    private activatedRoute: ActivatedRoute){}

    public pelicula: Pelicula = new Pelicula();
    public peliculas: Pelicula[];

    ngOnInit() {
      this.inicioService.getPeliculas().subscribe(peliculas=>this.peliculas=peliculas);
      }


}
