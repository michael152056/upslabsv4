import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  titulo = 'Crear usuario';
  id: string | null;
  constructor(private fb: FormBuilder, private router:Router, private toastr: ToastrService,private _usuarioService: UsuarioService,private aRouter: ActivatedRoute) { 
    this.usuarioForm = this.fb.group({
      usuario: ['',Validators.required],
      cedula: ['',Validators.required],
      email: ['',Validators.required],
      nivel: ['',Validators.required]

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarUsuario(){
    const USUARIO: Usuarios = {
      NOMBRES: this.usuarioForm.get('usuario')?.value,
      CEDULA: this.usuarioForm.get('cedula')?.value,
      EMAIL_INSTITUCIONAL: this.usuarioForm.get('email')?.value,
      NIVEL: this.usuarioForm.get('nivel')?.value,
    }
    if(this.id !==null){
      //editamos usuario
      this._usuarioService.editarUsuario(this.id,USUARIO).subscribe(data => {
        this.toastr.info('Usuario actualizado con éxito!', 'Usuario actualizado!');
        this.router.navigate(['/usuarios']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
  
    }else{
      //agregamos
      console.log(USUARIO);
      this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
        this.toastr.success('Usuario registrado con éxito!', 'Usuario registrado!');
        this.router.navigate(['/usuarios']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
  
    }
  }

  esEditar(){
    if(this.id !=null){
      this.titulo = 'Editar usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data =>{
        this.usuarioForm.setValue({
          usuario: data.usuario,
          cedula: data.cedula,
          email: data.email,
          nivel: data.nivel
        })
      }) 
    }
  }
  
}

