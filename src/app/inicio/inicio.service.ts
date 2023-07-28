import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pelicula } from './pelicula';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private urlEndPointP:string = 'http://localhost:8080/api/pelicula';
  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient,private authService:AuthService ) { }

  private agregarAuthorizationHeader(){
  let token= this.authService.token;
    if(token!= null){
      return this.httpHeaders.append('Authorization','Bearer '+token);
    }
    return this.httpHeaders;
  }

  getPeliculas(): Observable<Pelicula[]>{
    return this.http.get(this.urlEndPointP,{headers: this.agregarAuthorizationHeader()}).pipe(map((response)=>response as Pelicula[]) );
  }
  
}
