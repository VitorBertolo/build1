import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../shared/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../users/shared/user.service';
import { User } from '../../users/shared/user';
import { Clients } from '../../clients/shared/clients';
import { ClientsService } from '../../clients/shared/clients.service';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.scss']
})
export class EditServicesComponent implements OnInit{
  editForm: FormGroup;
  User!: User[];
  Clients!: Clients[]
  constructor(
    private serviceApi: ServicesService,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    public userApi: UsersService,
    public clientApi: ClientsService
  ){}

  ngOnInit(){
    this.updateServiceData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.serviceApi
    .GetService(id)
    .valueChanges()
    .subscribe((data) => {
      this.editForm.setValue(data);
    })

    let s = this.userApi.GetUsersList();
    s.snapshotChanges().subscribe((data) => {
      this.User = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.User.push(a as User);
      });
    });

    let b = this.clientApi.GetClientsList();
    b.snapshotChanges().subscribe((data) => {
      this.Clients = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Clients.push(a as Clients);
      });
    });
  }

  get responsavel() {
    return this.editForm.get('responsavel');
  }

  get responsavel_treinamento() {
    return this.editForm.get('responsavel_treinamento');
  }

  get treinamento() {
    return this.editForm.get('treinamento');
  }

  get hora_inicio() {
    return this.editForm.get('hora_inicio');
  }

  get hora_fim() {
    return this.editForm.get('hora_fim');
  }

  get empresa() {
    return this.editForm.get('empresa');
  }

  get tipo_servico1() {
    return this.editForm.get('tipo_servico1');
  }

  get tipo_servico2() {
    return this.editForm.get('tipo_servico2');
  }

  get tipo_servico3() {
    return this.editForm.get('tipo_servico3');
  }

  get prazo_entrega() {
    return this.editForm.get('prazo_entrega');
  }

  get status_servico() {
    return this.editForm.get('status_servico');
  }

  get price_servico() {
    return this.editForm.get('price_servico');
  }

  get nome_aluno_1() {
    return this.editForm.get('nome_aluno_1');
  }

  get cpf_aluno_1() {
    return this.editForm.get('cpf_aluno_1');
  }

  get rg_aluno1() {
    return this.editForm.get('rg_aluno1');
  }

  get status_aluno_servico1() {
    return this.editForm.get('status_aluno_servico1');
  }

  get nome_aluno_2() {
    return this.editForm.get('nome_aluno_2');
  }

  get cpf_aluno_2() {
    return this.editForm.get('cpf_aluno_2');
  }

  get rg_aluno2() {
    return this.editForm.get('rg_aluno2');
  }

  get status_aluno_servico2() {
    return this.editForm.get('status_aluno_servico2');
  }

  get nome_aluno_3() {
    return this.editForm.get('nome_aluno_3');
  }

  get cpf_aluno_3() {
    return this.editForm.get('cpf_aluno_3');
  }

  get rg_aluno3() {
    return this.editForm.get('rg_aluno3');
  }

  get status_aluno_servico3() {
    return this.editForm.get('status_aluno_servico3');
  }

  get nome_aluno_4() {
    return this.editForm.get('nome_aluno_4');
  }

  get cpf_aluno_4() {
    return this.editForm.get('cpf_aluno_4');
  }

  get rg_aluno4() {
    return this.editForm.get('rg_aluno4');
  }

  get status_aluno_servico4() {
    return this.editForm.get('status_aluno_servico4');
  }

  get nome_aluno_5() {
    return this.editForm.get('nome_aluno_5');
  }

  get cpf_aluno_5() {
    return this.editForm.get('cpf_aluno_5');
  }

  get rg_aluno5() {
    return this.editForm.get('rg_aluno5');
  }

  get status_aluno_servico5() {
    return this.editForm.get('status_aluno_servico5');
  }

  get nome_aluno_6() {
    return this.editForm.get('nome_aluno_6');
  }

  get cpf_aluno_6() {
    return this.editForm.get('cpf_aluno_6');
  }

  get rg_aluno6() {
    return this.editForm.get('rg_aluno6');
  }

  get status_aluno_servico6() {
    return this.editForm.get('status_aluno_servico6');
  }

  get nome_aluno_7() {
    return this.editForm.get('nome_aluno_7');
  }

  get cpf_aluno_7() {
    return this.editForm.get('cpf_aluno_7');
  }

  get rg_aluno7() {
    return this.editForm.get('rg_aluno7');
  }

  get status_aluno_servico7() {
    return this.editForm.get('status_aluno_servico7');
  }

  get nome_aluno_8() {
    return this.editForm.get('nome_aluno_8');
  }

  get cpf_aluno_8() {
    return this.editForm.get('cpf_aluno_8');
  }

  get rg_aluno8() {
    return this.editForm.get('rg_aluno8');
  }

  get status_aluno_servico8() {
    return this.editForm.get('status_aluno_servico8');
  }

  get nome_aluno_9() {
    return this.editForm.get('nome_aluno_9');
  }

  get cpf_aluno_9() {
    return this.editForm.get('cpf_aluno_9');
  }

  get rg_aluno9() {
    return this.editForm.get('rg_aluno9');
  }

  get status_aluno_servico9() {
    return this.editForm.get('status_aluno_servico9');
  }

  get nome_aluno_10() {
    return this.editForm.get('nome_aluno_10');
  }

  get cpf_aluno_10() {
    return this.editForm.get('cpf_aluno_10');
  }

  get rg_aluno10() {
    return this.editForm.get('rg_aluno10');
  }

  get status_aluno_servico10() {
    return this.editForm.get('status_aluno_servico10');
  }

  get nome_aluno_11() {
    return this.editForm.get('nome_aluno_11');
  }

  get cpf_aluno_11() {
    return this.editForm.get('cpf_aluno_11');
  }

  get rg_aluno11() {
    return this.editForm.get('rg_aluno11');
  }

  get status_aluno_servico11() {
    return this.editForm.get('status_aluno_servico11');
  }

  get nome_aluno_12() {
    return this.editForm.get('nome_aluno_12');
  }

  get cpf_aluno_12() {
    return this.editForm.get('cpf_aluno_12');
  }

  get rg_aluno12() {
    return this.editForm.get('rg_aluno12');
  }

  get status_aluno_servico12() {
    return this.editForm.get('status_aluno_servico12');
  }

  get nome_aluno_13() {
    return this.editForm.get('nome_aluno_13');
  }

  get cpf_aluno_13() {
    return this.editForm.get('cpf_aluno_13');
  }

  get rg_aluno13() {
    return this.editForm.get('rg_aluno13');
  }

  get status_aluno_servico13() {
    return this.editForm.get('status_aluno_servico13');
  }

  get nome_aluno_14() {
    return this.editForm.get('nome_aluno_14');
  }

  get cpf_aluno_14() {
    return this.editForm.get('cpf_aluno_14');
  }

  get rg_aluno14() {
    return this.editForm.get('rg_aluno14');
  }

  get status_aluno_servico14() {
    return this.editForm.get('status_aluno_servico14');
  }

  get nome_aluno_15() {
    return this.editForm.get('nome_aluno_15');
  }

  get cpf_aluno_15() {
    return this.editForm.get('cpf_aluno_15');
  }

  get rg_aluno15() {
    return this.editForm.get('rg_aluno15');
  }

  get status_aluno_servico15() {
    return this.editForm.get('status_aluno_servico15');
  }

  get nome_aluno_16() {
    return this.editForm.get('nome_aluno_16');
  }

  get cpf_aluno_16() {
    return this.editForm.get('cpf_aluno_16');
  }

  get rg_aluno16() {
    return this.editForm.get('rg_aluno16');
  }

  get status_aluno_servico16() {
    return this.editForm.get('status_aluno_servico16');
  }

  get nome_aluno_17() {
    return this.editForm.get('nome_aluno_17');
  }

  get cpf_aluno_17() {
    return this.editForm.get('cpf_aluno_17');
  }

  get rg_aluno17() {
    return this.editForm.get('rg_aluno17');
  }

  get status_aluno_servico17() {
    return this.editForm.get('status_aluno_servico17');
  }

  get nome_aluno_18() {
    return this.editForm.get('nome_aluno_18');
  }

  get cpf_aluno_18() {
    return this.editForm.get('cpf_aluno_18');
  }

  get rg_aluno18() {
    return this.editForm.get('rg_aluno18');
  }

  get status_aluno_servico18() {
    return this.editForm.get('status_aluno_servico18');
  }

  get nome_aluno_19() {
    return this.editForm.get('nome_aluno_19');
  }

  get cpf_aluno_19() {
    return this.editForm.get('cpf_aluno_19');
  }

  get rg_aluno19() {
    return this.editForm.get('rg_aluno19');
  }

  get status_aluno_servico19() {
    return this.editForm.get('status_aluno_servico19');
  }

  get nome_aluno_20() {
    return this.editForm.get('nome_aluno_20');
  }

  get cpf_aluno_20() {
    return this.editForm.get('cpf_aluno_20');
  }

  get rg_aluno20() {
    return this.editForm.get('rg_aluno20');
  }

  get status_aluno_servico20() {
    return this.editForm.get('status_aluno_servico20');
  }
  

  updateServiceData(){
    this.editForm = this.fb.group({
      responsavel: [''],
      responsavel_treinamento: [''],
      treinamento: [''],
      hora_inicio: [''],
      hora_fim: [''],
      empresa: [''],
      tipo_servico1: [''],
      tipo_servico2: [''],
      tipo_servico3: [''],
      prazo_entrega: [''],
      status_servico: [''],
      price_servico: [''],
      id_aluno_1: [''],
      nome_aluno_1: [''],
      cpf_aluno_1: [''],
      rg_aluno1: [''],
      status_aluno_servico1: [''],
      id_aluno_2: [''],
      nome_aluno_2: [''],
      cpf_aluno_2: [''],
      rg_aluno2: [''],
      status_aluno_servico2: [''],
      id_aluno_3: [''],
      nome_aluno_3: [''],
      cpf_aluno_3: [''],
      rg_aluno3: [''],
      status_aluno_servico3: [''],
      id_aluno_4: [''],
      nome_aluno_4: [''],
      cpf_aluno_4: [''],
      rg_aluno4: [''],
      status_aluno_servico4: [''],
      id_aluno_5: [''],
      nome_aluno_5: [''],
      cpf_aluno_5: [''],
      rg_aluno5: [''],
      status_aluno_servico5: [''],
      id_aluno_6: [''],
      nome_aluno_6: [''],
      cpf_aluno_6: [''],
      rg_aluno6: [''],
      status_aluno_servico6: [''],
      id_aluno_7: [''],
      nome_aluno_7: [''],
      cpf_aluno_7: [''],
      rg_aluno7: [''],
      status_aluno_servico7: [''],
      id_aluno_8: [''],
      nome_aluno_8: [''],
      cpf_aluno_8: [''],
      rg_aluno8: [''],
      status_aluno_servico8: [''],
      id_aluno_9: [''],
      nome_aluno_9: [''],
      cpf_aluno_9: [''],
      rg_aluno9: [''],
      status_aluno_servico9: [''],
      id_aluno_10: [''],
      nome_aluno_10: [''],
      cpf_aluno_10: [''],
      rg_aluno10: [''],
      status_aluno_servico10: [''],
      id_aluno_11: [''],
      nome_aluno_11: [''],
      cpf_aluno_11: [''],
      rg_aluno11: [''],
      status_aluno_servico11: [''],
      id_aluno_12: [''],
      nome_aluno_12: [''],
      cpf_aluno_12: [''],
      rg_aluno12: [''],
      status_aluno_servico12: [''],
      id_aluno_13: [''],
      nome_aluno_13: [''],
      cpf_aluno_13: [''],
      rg_aluno13: [''],
      status_aluno_servico13: [''],
      id_aluno_14: [''],
      nome_aluno_14: [''],
      cpf_aluno_14: [''],
      rg_aluno14: [''],
      status_aluno_servico14: [''],
      id_aluno_15: [''],
      nome_aluno_15: [''],
      cpf_aluno_15: [''],
      rg_aluno15: [''],
      status_aluno_servico15: [''],
      id_aluno_16: [''],
      nome_aluno_16: [''],
      cpf_aluno_16: [''],
      rg_aluno16: [''],
      status_aluno_servico16: [''],
      id_aluno_17: [''],
      nome_aluno_17: [''],
      cpf_aluno_17: [''],
      rg_aluno17: [''],
      status_aluno_servico17: [''],
      id_aluno_18: [''],
      nome_aluno_18: [''],
      cpf_aluno_18: [''],
      rg_aluno18: [''],
      status_aluno_servico18: [''],
      id_aluno_19: [''],
      nome_aluno_19: [''],
      cpf_aluno_19: [''],
      rg_aluno19: [''],
      status_aluno_servico19: [''],
      id_aluno_20: [''],
      nome_aluno_20: [''],
      cpf_aluno_20: [''],
      rg_aluno20: [''],
      status_aluno_servico20: [''],
    })
  }

  updateForm(){
    this.serviceApi.UpdateService(this.editForm.value);
    this.toastr.success('Serviço Editado com Sucesso!!!');
    this.router.navigate(['/services']);
  }
}
