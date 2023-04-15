import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.scss'],
})
export class EditClientsComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private clientApi: ClientsService,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateClientData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.clientApi
      .GetClient(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  get nome() {
    return this.editForm.get('nome');
  }

  get cnpj() {
    return this.editForm.get('cnpj');
  }
  get responsavel_empresa() {
    return this.editForm.get('responsavel_empresa');
  }
  get responsavel_proseg() {
    return this.editForm.get('responsavel_proseg');
  }
  get telefone_fixo() {
    return this.editForm.get('telefone_fixo');
  }
  get telefone1() {
    return this.editForm.get('telefone1');
  }
  get telefone2() {
    return this.editForm.get('telefone2');
  }
  get email() {
    return this.editForm.get('email');
  }
  get mensal() {
    return this.editForm.get('mensal');
  }
  get periodicidade_visitas() {
    return this.editForm.get('periodicidade_visitas');
  }
  get item_contrato() {
    return this.editForm.get('item_contrato');
  }
  get validade_proc_esocial() {
    return this.editForm.get('validade_proc_esocial');
  }
  get vigencia_pgr() {
    return this.editForm.get('vigencia_pgr');
  }
  get validade_art() {
    return this.editForm.get('validade_art');
  }
  get cep() {
    return this.editForm.get('cep');
  }
  get bairro() {
    return this.editForm.get('bairro');
  }
  get logradouro() {
    return this.editForm.get('logradouro');
  }
  get numero() {
    return this.editForm.get('numero');
  }
  get cidade() {
    return this.editForm.get('cidade');
  }
  get uf() {
    return this.editForm.get('uf');
  }

  updateClientData() {
    this.editForm = this.fb.group({
      nome: [''],
      cnpj: [''],
      responsavel_empresa: [''],
      responsavel_proseg: [''],
      telefone_fixo: [''],
      telefone1: [''],
      telefone2: [''],
      email: [''],
      mensal: [''],
      periodicidade_visitas: [''],
      item_contrato: [''],
      validade_proc_esocial: [''],
      vigencia_pgr: [''],
      validade_art: [''],
      cep: [''],
      bairro: [''],
      logradouro: [''],
      numero: [''],
      cidade: [''],
      uf: [''],
    });
  }

  updateForm() {
    this.clientApi.UpdateClient(this.editForm.value);
    this.toastr.success('Cliente Atualizado com Sucesso!!!');
    this.router.navigate(['/clients']);
  }
}
