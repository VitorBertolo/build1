import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const permissoesRequeridas = route.data["permissoes"];
  
    if (!permissoesRequeridas || permissoesRequeridas.length === 0) {
      // Nenhuma permissão requerida, permite o acesso
      return true;
    }
  
    const usuarioAtual = this.AuthService.usuarioAtual;
  
    if (!usuarioAtual) {
      // Usuário não autenticado, não permite o acesso
      this.router.navigate(['']);
      return false;
    }
  
    if (usuarioAtual.permissoes.some(p => permissoesRequeridas.includes(p))) {
      // Usuário tem pelo menos uma das permissões requeridas, permite o acesso
      return true;
    }
  
    // Usuário não tem as permissões requeridas, não permite o acesso
    alert('Você não tem permissão para acessar esta tela!')
    return false;
  }
  
  



}
