import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  listUsuarios: Usuarios[] = [];

  constructor(private _usuarioService: UsuarioService, 
   private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error =>{
      console.log(error);
    }
   )
  }

  eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuarios(id).subscribe(data => {
      this.toastr.error("El usuario fue eliminado con exito", "Usuario Eliminado")
      this.obtenerUsuarios();
    },error =>{
      console.log(error);
    })
  }

 
}
