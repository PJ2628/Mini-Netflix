import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
import { Categoria } from './categoria';
import { PeliculaService } from './pelicula.service';
import swal from 'sweetalert2';
import { map } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit{

  public pelicula: Pelicula= new Pelicula();
  public peliculas: Pelicula[];

  public categoria: Categoria= new Categoria();
  public categorias: Categoria[];
  //public categoriaS: CategoriaS= new CategoriaS();
public id: any;

  private videoSeleccionado:File;
  public catefront: any;

  constructor(private peliculaService:PeliculaService){}


  ngOnInit() {
    this.peliculaService.getCategorias().subscribe(categorias=>this.categorias=categorias);
    
  }


seleccionarVideo(event){
this.videoSeleccionado = event.target.files[0];
console.log(this.videoSeleccionado);
}

subirVideo(){
 this.peliculaService.subirVideo(this.videoSeleccionado,this.pelicula.idPeli)
 .subscribe(pelicula=>{
this.pelicula =pelicula;
swal('La pelicula se ha subido en su totalidad correctamente',`La foto se ha subido con exito: ${this.pelicula.pelicula}`,'success');
 });
}


public create(): void{

  console.log("entro")
  
  this.peliculaService.getCategoria(this.catefront).subscribe(categoria =>  this.pelicula.categoria=categoria)
  this.pelicula.categoria=this.categoria
 setTimeout(() => {
  this.peliculaService.create(this.pelicula).subscribe(response => {this.pelicula=response 
   this.id =response.idPeli});
 }, 1000);

setTimeout(() => {
  console.log('registro',this.pelicula);
  setTimeout(() => {
     console.log("prueb id",this.pelicula.idPeli)
     console.log("prueb numeri",this.id)
    
       /*this.id = Object.values(this.pelicula)[0];
console.log("firstavae",this.id);*/
  }, 1500);
  const firstValue = Object.values(this.pelicula)[0];
console.log("firstavae",firstValue);
  this.peliculaService.subirVideo(this.videoSeleccionado,firstValue)
 .subscribe(pelicula=>{
this.pelicula =pelicula;
swal('La pelicula se ha subido en su totalidad correctamente',`La foto se ha subido con exito: ${this.pelicula.pelicula}`,'success');
 });
  //console.log('registro',this.pelicula);
}, 2000);
  
   


 //this.peliculaService.create(this.pelicula).subscribe(  );
}


}
