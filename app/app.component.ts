import { Component } from '@angular/core';
import { AuthService } from './pages/home/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularfirebase-student-app';
  mostrarMenu: boolean = false;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.AuthService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
  
}
