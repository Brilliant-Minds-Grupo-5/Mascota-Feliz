import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {SeguridadService} from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Router } from '@loopback/rest';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup= this.fb.group({
    "usuario":["",[Validators.required,Validators.email]],
    "contrasena":["", [Validators.required]]

  });

  constructor( private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router :Router) { }

  ngOnInit(): void {

  }

   IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let contrasenaCifrada= cryptoJS.MD5(contrasena).toString();
    this.servicioSeguridad.Identificar(usuario,contrasenaCifrada).subscribe((datos:any) =>{
      this.servicioSeguridad.AlmacenarSesion(datos);
      alert("Datos Correctos")
      this.router.navigate(["/inicio"]);
    },(error: any) => {
      alert ("Datos Invalidos")

    })
  }

}



