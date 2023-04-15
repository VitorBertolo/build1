import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ModalStartComponent } from "./modal-start/modal-start.component";
import { AuthService } from "../home/auth.service";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent {
  nomeUsuario: string;
  ngOnInit() {
    this.openModal();
    {
    }
    this.nomeUsuario = this.authService.getNomeUsuarioAtual();
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ["", Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ["", Validators.required],
  });

  isLinear = true;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  openModal() {
    this.dialog.open(ModalStartComponent, { width: "1200px"});
  }

}
