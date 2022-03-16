export class RegisterUsers{
  id?:string;
  dni:number;
  nombres:string;
  apellidoPaterno:string;
  apellidoMaterno:string;
  telefono:number;
  estado:string;
  rol:string;
  correo:string = "";
  password:string = "";
  fechaCreacion:Date;
  fechaActualizacion:Date;
  
  constructor(
    dni:number,
    nombres:string,
    apellidoPaterno:string,
    apellidoMaterno:string,
    telefono:number,
    estado:string,
    rol:string,
    correo:string,
    password:string
  )
    
  {
    this.dni = dni;
    this.nombres = nombres;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.telefono = telefono;
    this.rol = rol;
    this.estado = estado;
    this.correo = correo;
    this.password = password;
    this.fechaCreacion = new Date();
    this.fechaActualizacion = new Date();
  }

}
