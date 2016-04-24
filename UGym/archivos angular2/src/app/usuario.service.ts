import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Usuario{
    constructor(
      private id: number,
      private nombre: string,
      private apellidos: string,
      private dni: number,
      private hombre: boolean,
      private mujer: boolean,
      private fechaNac: string,
      private correo: string,
      private direccion: string,
      private codigoPostal: number,
      private localidad: string,
      private provincia: string,
      private telefono: number,
      private contraseña: string,
      private tarifa1: boolean,
      private tarifa2: boolean,
      private tarifa3: boolean){}

      getId(){
        return this.id;
      }

      setId(id: number){
        this.id = id;
      }

      getNombre(){
        return this.nombre;
      }

      setNombre(nom: string){
        this.nombre = nom;
      }

      getApellidos(){
        return this.apellidos;
      }

      setApellidos(ape: string){
        this.apellidos = ape;
      }

      getDni(){
        return this.dni;
      }

      setDni(dni: number){
        this.dni = dni;
      }

      getHombre(){
        return this.hombre;
      }

      setHombre(man: boolean){
        this.hombre = man;
      }

      getMujer(){
        return this.mujer;
      }

      setMujer(woman: boolean){
        this.mujer = woman;
      }

      getFechaNac(){
        return this.fechaNac;
      }

      setFechaNac(fech: string){
        this.fechaNac = fech;
      }

      getCorreo(){
        return this.correo;
      }

      setCorreo(correo: string){
        this.correo = correo;
      }

      getDireccion(){
        return this.direccion;
      }

      setDireccion(dir: string){
        this.direccion = dir;
      }

      getCodigoPostal(){
        return this.codigoPostal;
      }

      setCodigoPostal(codigo: number){
        this.codigoPostal = codigo;
      }

      getLocalidad(){
        return this.localidad;
      }

      setLocalidad(localidad: string){
        this.localidad = localidad;
      }

      getProvincia(){
        return this.provincia;
      }

      setProvincia(provincia: string){
        this.provincia = provincia;
      }

      getTelefono(){
        return this.telefono;
      }

      setTelefono(telefono: number){
        this.telefono = telefono;
      }

      getContraseña(){
        return this.contraseña;
      }

      setContraseña(contraseña: string){
        this.contraseña = contraseña;
      }

      getTarifa1(){
        return this.tarifa1;
      }

      setTarifa1(t1: boolean){
        this.tarifa1 = t1;
      }

      getTarifa2(){
        return this.tarifa2;
      }

      setTarifa2(t2: boolean){
        this.tarifa2 = t2;
      }

      getTarifa3(){
        return this.tarifa3;
      }

      setTarifa3(t3: boolean){
        this.tarifa3 = t3;
      }


}

@Injectable()
export class UsuarioService{

    private usuarios = [
      new Usuario(1,'Jesus','Amores Fernandez-Caballero',49054138,true,false,'02/04/1994','j.amoresf@urjc.es','C/Malaga 24',28945,'Fuenlabrada','Madrid',5555115,'contraseña',true,false,false),
      new Usuario(2,'Blanca','Romero Rico',123456789,false,true,'07/02/1994','b.romerori@urjc.es','C/Mostoles 12',28900,'Mostoles','Madrid',685459632,'otracontraseña',false,true,false)
    ]

    getInfo(id: number){
      for(let i=0; i<this.usuarios.length; i++){
          if(this.usuarios[i].getId() === id){
              return withObserver(this.usuarios[i]);
          }
      }

    }

    saveUser(usuario: Usuario){
        if(usuario.getId()){
          for(let i=0; i<this.usuarios.length; i++){
              if(this.usuarios[i].getId() === usuario.getId()){
                  let oldUser = this.usuarios[i];
                  oldUser.setNombre(usuario.getNombre());
                  oldUser.setApellidos(usuario.getApellidos());
                  oldUser.setNombre(usuario.getNombre());
                  oldUser.setDni(usuario.getDni());
                  oldUser.setNombre(usuario.getNombre());
                  oldUser.setHombre(usuario.getHombre());
                  oldUser.setMujer(usuario.getMujer());
                  oldUser.setFechaNac(usuario.getFechaNac());
                  oldUser.setCorreo(usuario.getCorreo());
                  oldUser.setNombre(usuario.getNombre());
                  oldUser.setDireccion(usuario.getDireccion());
                  oldUser.setCodigoPostal(usuario.getCodigoPostal());
                  oldUser.setLocalidad(usuario.getLocalidad());
                  oldUser.setProvincia(usuario.getProvincia());
                  oldUser.setTelefono(usuario.getTelefono());
                  oldUser.setContraseña(usuario.getContraseña());
                  oldUser.setTarifa1(usuario.getTarifa1());
                  oldUser.setTarifa2(usuario.getTarifa2());
                  oldUser.setTarifa3(usuario.getTarifa3());
                  break;
              }

          }
        }else{
          usuario.setId(this.usuarios.length + 1);
          let nUser = this.usuarios.push(usuario);
        }
        return withObserver(usuario);
    }

    removeUser(usuario: Usuario){
      for(let i=0; i<this.usuarios.length; i++){
          if(this.usuarios[i].getId() === usuario.getId()){
            this.usuarios.splice(i,1);
            break;
          }
      }
      return withObserver(undefined);
    }

}
