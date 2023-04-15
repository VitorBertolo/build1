import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "./usuario";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  usuarioAtual: Usuario;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  fazerLogin(usuario: Usuario) {
    if (
      usuario.nome === "suporte@prosegmt.com.br" &&
      usuario.senha === "proseg2441"
    ) {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.usuarioAtual = {
        nome: usuario.nome,
        senha: usuario.senha,
        permissoes: ["admin"],
      };
      this.router.navigate(["/start"]);
    } else {
      if (usuario.nome === "teste@gmail.com" && usuario.senha === "123") {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.usuarioAtual = {
          nome: usuario.nome,
          senha: usuario.senha,
          permissoes: ["user"],
        };
        this.router.navigate(["/start"]);
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  getNomeUsuarioAtual(): string {
    return this.usuarioAtual.nome;
  }
}
