import { Component } from '@angular/core';
import { Categoria } from './categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaService } from './categoria.service'; 
import swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  
  public categoria: Categoria= new Categoria();
  public categorias: Categoria[];

  constructor(private categoriaService:CategoriaService){}

  public create(): void{

    console.log("entro")
    
    this.categoriaService.create(this.categoria).subscribe(response => {swal('Lacategoria se ha guardado correctamente',`La categoria se ha subido con exito: ${response.nombre}`,'success');
    });
  }

}
