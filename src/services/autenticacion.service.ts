import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
const generador = require("password-generator");
const cryptpJS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository
  ) {}

  /*
   * Add service methods here
   */
  GenerarClave(){
    let clave = generador(8,false);
    return clave;
  }
  CifrarClave(clave:string){
    let claveCifrada = cryptpJS.MD5(clave);
    return claveCifrada;
  }

}



  IdentificarUsuario(Usuario: String, contrasena: String){
      try{
        let p = this.UsuarioRepository.findOne({where:{correo: Usuario, clave: contrasena}});
        if (p){
          return p;
        }
        return false;

      }catch{
        return false;
      }
    }





    GenerarTokenJWT(Usuario : Usuario){

  }


