import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Pelicula } from './pelicula';
import swal from 'sweetalert2';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private urlEndPointP:string = 'http://localhost:8080/api/pelicula/upload';
  private urlEndPointPs:string = 'http://localhost:8080/api/pelicula';
  private urlEndPointC:string = 'http://localhost:8080/api/categoria';
  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})

  constructor(private http:HttpClient) { }

  subirVideo(archivoP: File,id){
    let formData= new FormData();
    formData.append("archivoP",archivoP);
    formData.append("id",id);
    return this.http.post(`${this.urlEndPointP}`,formData).pipe(
      map((response:any)=> response.pelicula as Pelicula),
      catchError(e =>{
        console.error(e.error.mensaje);
        swal(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    );
  }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get(this.urlEndPointC).pipe(map((response)=>response as Categoria[]) );
    //return this.http.get<Cuenta[]>(this.urlEndPointC).subscribe();
    //return this.http.get<Cuenta[]>(this.urlEndPointC+'/registro');
  }

  getCategoria(idcate): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.urlEndPointC}/${idcate}`);
   }

  create(pelicula: Pelicula): Observable<Pelicula>{
    return this.http.post<Pelicula>(this.urlEndPointPs, pelicula)
  }

}
