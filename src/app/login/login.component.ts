import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario:Usuario;

constructor(private router:Router,private authService:AuthService){
  this.usuario=new Usuario();
}


ngOnInit(){
  /*if(this.authService.isAuthenticated()){
     swal('Inicio de sesion',`Hola ${this.authService.usuario.nombre},ya tienes sesion iniciada!`,'info');
    this.router.navigate(['/inicio']);
  }*/
}

login():void{
  console.log("lo del usuario",this.usuario);
  if((this.usuario.contra||this.usuario.contra) == null){
    console.log("esta vacio");
    return;
  }
  if(this.authService.isAuthenticated()==true){
    //let uusuario = this.authService.usuario;
    
    swal('Inicio de sesion',`Hola ${this.authService.usuario.nombre},ya tienes sesion iniciada!`,'info');
    this.router.navigate(['/inicio']);
  }else if(!this.authService.isAuthenticated()){
    this.authService.login(this.usuario).subscribe(response =>{

      let usuario = this.authService.usuario;
      
    // console.log("payload",usuario.nombre);
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      console.log("respuesta roken:",response.access_token);
      this.router.navigate(['/inicio'])
      swal('Inicio de sesion',`Hola ${response.nombre},has iniciado sesion con exito!`,'success');
    },err=>{
      if(err.status==400){
        swal('Error en inicio de sesion','Usuario o clave incorrectas!','error');
      }
    })

 }
  
}



}
