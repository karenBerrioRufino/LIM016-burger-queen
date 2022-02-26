//esta configuracion es para que angular pueda leer un archivo json
declare module "*.json" {
    const value: any;
    export default value;
 }