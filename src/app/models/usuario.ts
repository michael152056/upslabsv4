
export class Usuarios{
    _id?: number;
    NOMBRES: string;
    CEDULA: string;
    EMAIL_INSTITUCIONAL: string;
    NIVEL: string;


    constructor(periodo:string,descripcion: string, sede: string, campus: string,carrera: string, tipo_proyecto: string, cedula: string, nombres: string, nivel: string,pagado: string, institucional:string, personal: string,celular: string,convencional: string ){
        this.NOMBRES = nombres;
        this.CEDULA = cedula;
        this.EMAIL_INSTITUCIONAL = institucional;
        this.NIVEL = nivel;

    }
}