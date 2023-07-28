import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from './cuenta';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  /*registro: Registro[];*/

  public registro: Registro= new Registro();

  public cuentas: Cuenta[];
  public cuenta: Cuenta = new Cuenta();


  constructor(private registroService: RegistroService, private router:Router,
    private activatedRoute: ActivatedRoute){}


  ngOnInit() {
    
  //llenar la variable cuenta, siendo buscado con el idcuenta que se envia desde el hmtl cuenta
  //
    this.activatedRoute.paramMap.subscribe(params=>{let idcuenta = +params.get('idcuenta');
  this.registroService.getCuenta(idcuenta).subscribe(cuenta => this.registro.cuentatip=cuenta)
  console.log("cuentati2",idcuenta)
  this.registro.cuentatip= this.cuenta;;})
     //this.registro.roles=[1];
     this.registro.enabl=true;
     console.log("cuentati",this.cuenta);
     console.log("cuentat3",this.registro.cuentatip);
     
     
     
    // registro.cuentat2ipidccuenta;


   }



  public create(): void{
    console.log("entro")
    console.log('regsitro',this.registro)
    //this.registroService.create(this.registro).subscribe( response => this.router.navigate(['/.registro']));
    this.registroService.create(this.registro).subscribe();
    
  }

  private isNoAutorizado(e): boolean{
    if(e.status==201|| e.status==403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }


}
