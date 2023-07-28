import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html'
})
export class AdministracionComponent {
  private urlEndPoint:String ='http://localhost:8080/api/usuario';

  constructor(private http: HttpClient){}

  //return this.http.get<Usuario[]>(this.urlEndPoint);
 // map((response)=> response as Usuario[])
}
