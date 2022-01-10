export class Evento{
    _id?: number;
    titulo_evento: string;
    tipo_evento: string;
    desc_evento: string;
    dia_evento: string;
    mes_evento: string;
    ano_evento: string;
    imagen_evento: string;

    constructor(titulo_evento:string,tipo_evento: string, desc_evento: string, dia_evento: string, mes_evento: string, ano_evento: string, imagen_evento: string){
        this.titulo_evento = titulo_evento;
        this.tipo_evento = tipo_evento;
        this.desc_evento = desc_evento;
        this.dia_evento = dia_evento;
        this.mes_evento = mes_evento;
        this.ano_evento = ano_evento;
        this.imagen_evento = imagen_evento;
    }
}