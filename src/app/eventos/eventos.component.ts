import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  listEventos: Evento[] = [];
  constructor(private _eventoService: EventoService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEventos();
  }
  obtenerEventos(){
    this._eventoService.getEventos().subscribe(data => {
      console.log(data);
      this.listEventos = data;
    }, error =>{
      console.log(error);
    }
   )
  }

}
