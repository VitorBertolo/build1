import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  hide = true;
  public usuario: Usuario = new Usuario();

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
  }

  fazerLogin() {
    //console.log(this.usuario)
    this.AuthService.fazerLogin(this.usuario);
  }
}
