import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from './cuenta';
import { CuentaService } from './cuenta.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  
  constructor(private cuentaService: CuentaService, private router:Router,
    private activatedRoute: ActivatedRoute){}
 
  public cuenta: Cuenta = new Cuenta();
  public cuentas: Cuenta[];


  ngOnInit() {
  this.cuentaService.getCuentas().subscribe(cuentas=>this.cuentas=cuentas);
  }


}
