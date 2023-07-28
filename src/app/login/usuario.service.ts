import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient,private router:Router) { }

private isNoAutorizado(e): boolean{
  if(e.status==201|| e.status==403){
    this.router.navigate(['/login'])
    return true;
  }
  return false;
}

}
