import { Clients } from './clients';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  clientsRef!: AngularFireList<any>;
  clientRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  // Create Student
  AddClient(clients: Clients) {
    this.clientsRef.push({
      nome: clients.nome,
      cnpj: clients.cnpj,
      responsavel_empresa: clients.responsavel_empresa,
      responsavel_proseg: clients.responsavel_proseg,
      telefone_fixo: clients.telefone_fixo,
      telefone1: clients.telefone1,
      telefone2: clients.telefone2,
      email: clients.email,
      mensal: clients.mensal,
      periodicidade_visitas: clients.periodicidade_visitas,
      item_contrato: clients.item_contrato,
      validade_proc_esocial: clients.validade_proc_esocial,
      vigencia_pgr: clients.vigencia_pgr,
      validade_art: clients.validade_art,
      cep: clients.cep,
      bairro: clients.bairro,
      logradouro: clients.logradouro,
      numero: clients.numero,
      cidade: clients.cidade,
      uf: clients.uf,
    });
  }

  // Fetch Single Student Object
  GetClient(id: string) {
    this.clientRef = this.db.object('clients-list/' + id);
    return this.clientRef;
  }

  // Fetch Students List
  GetClientsList() {
    this.clientsRef = this.db.list('clients-list');
    return this.clientsRef;
  }

  // Update Student Object
  UpdateClient(clients: Clients) {
    this.clientRef.update({
      nome: clients.nome,
      cnpj: clients.cnpj,
      responsavel_empresa: clients.responsavel_empresa,
      responsavel_proseg: clients.responsavel_proseg,
      telefone_fixo: clients.telefone_fixo,
      telefone1: clients.telefone1,
      telefone2: clients.telefone2,
      email: clients.email,
      mensal: clients.mensal,
      periodicidade_visitas: clients.periodicidade_visitas,
      item_contrato: clients.item_contrato,
      validade_proc_esocial: clients.validade_proc_esocial,
      vigencia_pgr: clients.vigencia_pgr,
      validade_art: clients.validade_art,
      cep: clients.cep,
      bairro: clients.bairro,
      logradouro: clients.logradouro,
      numero: clients.numero,
      cidade: clients.cidade,
      uf: clients.uf,
    });
  }

  // Delete Student Object
  DeleteClient(id: string) {
    this.clientRef = this.db.object('clients-list/' + id);
    this.clientRef.remove();
  }
}
