import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private urlEndPointP:string = 'http://localhost:8080/api/pelicula/video';
  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient,private authService:AuthService ) { }

  private agregarAuthorizationHeader(){
  let token= this.authService.token;
    if(token!= null){
      return this.httpHeaders.append('Authorization','Bearer '+token);
    }
    return this.httpHeaders;
  }

  public getPeliculas(nombrePelicula){
    return this.http.get(`${this.urlEndPointP}/${nombrePelicula}`,{headers: this.agregarAuthorizationHeader()});
  }
  
}
