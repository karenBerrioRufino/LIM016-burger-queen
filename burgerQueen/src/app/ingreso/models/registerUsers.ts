export class RegisterUsers{
<<<<<<< HEAD
  id?: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: number;
  rol: string;
  correo: string;
  constraseña:string;

  constructor(nombres: string, apellidoPaterno: string, apellidoMaterno: string, telefono: number, rol: string, correo: string,
    constraseña:string){
      this.nombres = nombres;
      this.apellidoPaterno = apellidoPaterno;
      this.apellidoMaterno = apellidoMaterno;
      this.telefono = telefono;
      this.rol = rol;
      this.correo = correo;
      this.constraseña = constraseña;
  }
=======
  
  id?:string;
  nombres:string;
  apellidoPaterno:string;
  apellidoMaterno:string;
  telefono:number;
  rol:string;
  correo:string;
  contraseña:string;

  constructor(nombres:string,apellidoPaterno:string,apellidoMaterno:string,telefono:number,rol:string,correo:string,contraseña:string){
    
    this.nombres = nombres;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.telefono = telefono;
    this.rol = rol;
    this.correo = correo;
    this.contraseña = contraseña;
  }

>>>>>>> 2e97dfad7a85a788c57fd1e724612e9443d7cc0f
}