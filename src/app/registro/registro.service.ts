import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {of, Observable } from 'rxjs';
import { Registro } from './registro';
import { map } from 'rxjs';
import { Cuenta } from './cuenta';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private urlEndPoint:string = 'http://localhost:8080/api/usuario';
  private urlEndPointC:string = 'http://localhost:8080/api/cuentatip';
  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient ) { }
  
  /*getUsuario(): Observable<Registro[]>{
    return this.http.get<Registro[]>(this.urlEndPoint);
  }*/

 /* getUsuario(): Observable<Registro[]>{
    return this.http.get(this.urlEndPoint).pipe
    (map (response => response as Registro[] )
    );
  }*/

 /* create(registro: Registro): Observable<Registro>{
    return this.http.post<Registro>(this.urlEndPoint, registro,{headers: this.httpHeaders})
  }*/

  getCuentas(): Observable<Cuenta[]>{
    return this.http.get(this.urlEndPointC).pipe(map((response)=>response as Cuenta[]) );
    //return this.http.get<Cuenta[]>(this.urlEndPointC).subscribe();
    //return this.http.get<Cuenta[]>(this.urlEndPointC+'/registro');
  }

  getCuenta(idcuenta): Observable<Cuenta>{
   return this.http.get<Cuenta>(`${this.urlEndPointC}/${idcuenta}`);
  //return this.http.get<Cuenta>('${this.urlEndPointC}/${idcuenta}');
  }

  create(registro: Registro): Observable<Registro>{
    return this.http.post<Registro>(this.urlEndPoint, registro)
  }




  //create(usuario:Usuario):
}
