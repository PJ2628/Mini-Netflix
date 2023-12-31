import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario:Usuario;
  private _token:string;

  constructor(private http:HttpClient) { }

  public get usuario():Usuario{
if(this._usuario!=null){
return this._usuario
}else if(this._usuario==null && sessionStorage.getItem('usuario')!=null){
  JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
  return this._usuario;
}
  return new Usuario();
  }

  public get token():string{
    if(this._token!=null){
      return this._token
      }else if(this._token==null && sessionStorage.getItem('token')!=null){
        sessionStorage.getItem('usuario');
        return this._token;
      }
      return null;
  }

  login(usuario:Usuario):Observable<any>{
    const urlEndpoint = 'http://localhost:8080/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + credenciales});

    let params = new URLSearchParams();
    params.set('grant_type','password');
    params.set('username',usuario.correo);
    params.set('password',usuario.contra);
    console.log('parametros',params.toString());
    return this.http.post<any>(urlEndpoint,params.toString(),{headers:httpHeaders});
  }

guardarUsuario(accessToken: string):void{
let payload = this.obtenerDatosToken(accessToken);
  this._usuario= new Usuario();
this._usuario.correo = payload.correo;
this._usuario.nombre = payload.nombre;
this._usuario.contra = payload.contra;
this._usuario.enabl = payload.enabl;
this._usuario.roles = payload.authorities;
sessionStorage.setItem('usuario',JSON.stringify(this._usuario));
}

guardarToken(accessToken: string):void{
  this._token = accessToken;
  sessionStorage.setItem('token',accessToken);
  }
  
  obtenerDatosToken(accessToken: string):any{
  if(accessToken!=null){
    return JSON.parse(atob(accessToken.split(".")[1]));
  }
  return null;
  }


  isAuthenticated():boolean{
    let payload = this.obtenerDatosToken(this.token);
    if(payload!=null && payload.correo && payload.correo.length>0){
      return true
    }
    return false;
  }

}

