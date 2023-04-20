import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/home/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mostrarMenu: boolean = false;
  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit() {
    this.AuthService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
  
  reload(){
    location.reload();      
  }

}
