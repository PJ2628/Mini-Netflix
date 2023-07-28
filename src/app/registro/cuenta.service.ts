import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {of, Observable } from 'rxjs';
import { Registro } from './registro';
import { map } from 'rxjs';
import { Cuenta } from './cuenta';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private urlEndPointC:string = 'http://localhost:8080/api/cuentatip';
  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient,private authService:AuthService) { }

  private agregarAuthorizationHeader(){
    let token= this.authService.token;
      if(token!= null){
        return this.httpHeaders.append('Authorization','Bearer '+token);
      }
      return this.httpHeaders;
    }

  getCuentas(): Observable<Cuenta[]>{
    return this.http.get(this.urlEndPointC,{headers: this.agregarAuthorizationHeader()}).pipe(map((response)=>response as Cuenta[]) );
    //return this.http.get<Cuenta[]>(this.urlEndPointC).subscribe();
    //return this.http.get<Cuenta[]>(this.urlEndPointC+'/registro');
  }
  
}
