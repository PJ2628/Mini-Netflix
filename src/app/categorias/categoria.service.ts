import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { AuthService } from '../login/auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPointC:string = 'http://localhost:8080/api/categoria';
  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})

  constructor(private http:HttpClient,private authService:AuthService) { }

  private agregarAuthorizationHeader(){
    let token= this.authService.token;
      if(token!= null){
        return this.httpHeaders.append('Authorization','Bearer '+token);
      }
      return this.httpHeaders;
    }

  create(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.urlEndPointC, categoria,{headers: this.agregarAuthorizationHeader()})
  }
}
