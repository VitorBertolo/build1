import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ClientsService } from "../shared/clients.service";
import { Router } from "@angular/router";
import { User } from "../../users/shared/user";
import { UsersService } from "../../users/shared/user.service";
import { HttpClient } from "@angular/common/http";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { ConsultaService } from "../../test_new_components/consulta.service";

@Component({
  selector: "app-add-clients",
  templateUrl: "./add-clients.component.html",
  styleUrls: ["./add-clients.component.scss"],
})
export class AddClientsComponent implements OnInit {
  public clientForm!: FormGroup;
  User!: User[];

  constructor(
    public clientApi: ClientsService,
    public fb: FormBuilder,
    public toarstr: ToastrService,
    private router: Router,
    public userApi: UsersService,
    private http: HttpClient,
    private ConsultaService: ConsultaService
  ) {}

  ngOnInit(): void {
    this.clientApi.GetClientsList();
    let s = this.userApi.GetUsersList();
    s.snapshotChanges().subscribe((data) => {
      this.User = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a["$key"] = item.key;
        this.User.push(a as User);
      });
    });

    this.clienForm();
  }

  clienForm() {
    this.clientForm = this.fb.group({
      nome: [""],
      cnpj: [""],
      responsavel_empresa: [""],
      responsavel_proseg: [""],
      telefone_fixo: ["N/A"],
      telefone1: [""],
      telefone2: [""],
      email: [""],
      mensal: ["N/A"],
      periodicidade_visitas: ["N/A"],
      item_contrato: ["N/A"],
      validade_proc_esocial: ["N/A"],
      vigencia_pgr: ["N/A"],
      validade_art: ["N/A"],
      cep: ["", Validators.required],
      logradouro: [""],
      localidade: [""],
      bairro: [""],
      uf: [""],
      ddd: [""],
    });
  }

  get nome() {
    return this.clientForm.get("nome");
  }

  get cnpj() {
    return this.clientForm.get("cnpj");
  }
  get responsavel_empresa() {
    return this.clientForm.get("responsavel_empresa");
  }
  get responsavel_proseg() {
    return this.clientForm.get("responsavel_proseg");
  }
  get telefone_fixo() {
    return this.clientForm.get("telefone_fixo");
  }
  get telefone1() {
    return this.clientForm.get("telefone1");
  }
  get telefone2() {
    return this.clientForm.get("telefone2");
  }
  get email() {
    return this.clientForm.get("email");
  }
  get mensal() {
    return this.clientForm.get("mensal");
  }
  get periodicidade_visitas() {
    return this.clientForm.get("periodicidade_visitas");
  }
  get item_contrato() {
    return this.clientForm.get("item_contrato");
  }
  get validade_proc_esocial() {
    return this.clientForm.get("validade_proc_esocial");
  }
  get vigencia_pgr() {
    return this.clientForm.get("vigencia_pgr");
  }
  get validade_art() {
    return this.clientForm.get("validade_art");
  }
  get cep() {
    return this.clientForm.get("cep");
  }
  get bairro() {
    return this.clientForm.get("bairro");
  }
  get logradouro() {
    return this.clientForm.get("logradouro");
  }
  get numero() {
    return this.clientForm.get("numero");
  }
  get cidade() {
    return this.clientForm.get("cidade");
  }
  get uf() {
    return this.clientForm.get("uf");
  }

  resetForm() {
    this.clientForm.reset();
  }

  submitClientsData() {
    this.clientApi.AddClient(this.clientForm.value);
    this.toarstr.success("Usuário Criado com Sucesso!!!");
    this.resetForm();
    this.router.navigate(["/clients"]);
  }

  buscaCEP() {
    const cep = this.clientForm.get("cep").value;
    this.ConsultaService.getCEP(cep).subscribe((data) => {
      this.clientForm.patchValue(data);
      console.log(this.clientForm.value);
    });
  }

  onBlur() {
    this.buscaCEP();
  }
}
