export class RegisterUsers{
  id?:string;
  nombres:string;
  apellidoPaterno:string;
  apellidoMaterno:string;
  telefono:number;
  rol:string;
  correo:string;
  contraseña:string;
  
  constructor(
    nombres:string,
    apellidoPaterno:string,
    apellidoMaterno:string,
    telefono:number,
    rol:string,
    correo:string,
    contraseña:string)
    
  {

    this.nombres = nombres;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.telefono = telefono;
    this.rol = rol;
    this.correo = correo;
    this.contraseña = contraseña;
  }

}
