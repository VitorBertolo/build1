import { Injectable } from '@angular/core';
import { Order, Services } from './services';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  servicesRef!: AngularFireList<any>;
  serviceRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  // Create Student
  AddService(service: Services) {
      const servicesRef = this.db.list('services-list');
      const newServiceRef = servicesRef.push(service);
      const newServiceId = newServiceRef.key;
      const ordersRef = this.db.list(`services-list/${newServiceId}/orders`)
      ordersRef.push({ id: 1, product: '1'});
  }

  GetService(id: string) {
    this.serviceRef = this.db.object('services-list/' + id);
    return this.serviceRef;
  }

  GetServicesList() {
    this.servicesRef = this.db.list('services-list');
    return this.servicesRef;
  }

  UpdateService(service: Services) {
    this.serviceRef.update({
      responsavel: service.responsavel,
      responsavel_treinamento: service.responsavel_treinamento,
      treinamento: service.treinamento,
      hora_inicio: service.hora_inicio,
      hora_fim: service.hora_fim,
      hora_total: service.hora_total,
      cidade_treinamento: service.cidade_treinamento,
      empresa: service.empresa,
      empresa_lista: service.empresa_lista,
      tipo_servico1: service.tipo_servico1,
      tipo_servico2: service.tipo_servico2,
      tipo_servico3: service.tipo_servico3,
      prazo_entrega: service.prazo_entrega,
      status_servico: service.status_servico,
      price_servico: service.price_servico,
      id_aluno_1: service.id_aluno_1,
      nome_aluno_1: service.nome_aluno_1,
      cpf_aluno_1: service.cpf_aluno_1,
      rg_aluno1: service.rg_aluno1,
      status_aluno_servico1: service.status_aluno_servico1,
      id_aluno_2: service.id_aluno_2,
      nome_aluno_2: service.nome_aluno_2,
      cpf_aluno_2: service.cpf_aluno_2,
      rg_aluno2: service.rg_aluno2,
      status_aluno_servico2: service.status_aluno_servico2,
      id_aluno_3: service.id_aluno_3,
      nome_aluno_3: service.nome_aluno_3,
      cpf_aluno_3: service.cpf_aluno_3,
      rg_aluno3: service.rg_aluno3,
      status_aluno_servico3: service.status_aluno_servico3,
      id_aluno_4: service.id_aluno_4,
      nome_aluno_4: service.nome_aluno_4,
      cpf_aluno_4: service.cpf_aluno_4,
      rg_aluno4: service.rg_aluno4,
      status_aluno_servico4: service.status_aluno_servico4,
      id_aluno_5: service.id_aluno_5,
      nome_aluno_5: service.nome_aluno_5,
      cpf_aluno_5: service.cpf_aluno_5,
      rg_aluno5: service.rg_aluno5,
      status_aluno_servico5: service.status_aluno_servico5,
      id_aluno_6: service.id_aluno_6,
      nome_aluno_6: service.nome_aluno_6,
      cpf_aluno_6: service.cpf_aluno_6,
      rg_aluno6: service.rg_aluno6,
      status_aluno_servico6: service.status_aluno_servico6,
      id_aluno_7: service.id_aluno_7,
      nome_aluno_7: service.nome_aluno_7,
      cpf_aluno_7: service.cpf_aluno_7,
      rg_aluno7: service.rg_aluno7,
      status_aluno_servico7: service.status_aluno_servico7,
      id_aluno_8: service.id_aluno_8,
      nome_aluno_8: service.nome_aluno_8,
      cpf_aluno_8: service.cpf_aluno_8,
      rg_aluno8: service.rg_aluno8,
      status_aluno_servico8: service.status_aluno_servico8,
      id_aluno_9: service.id_aluno_9,
      nome_aluno_9: service.nome_aluno_9,
      cpf_aluno_9: service.cpf_aluno_9,
      rg_aluno9: service.rg_aluno9,
      status_aluno_servico9: service.status_aluno_servico9,
      id_aluno_10: service.id_aluno_10,
      nome_aluno_10: service.nome_aluno_10,
      cpf_aluno_10: service.cpf_aluno_10,
      rg_aluno10: service.rg_aluno10,
      status_aluno_servico10: service.status_aluno_servico10,
      id_aluno_11: service.id_aluno_11,
      nome_aluno_11: service.nome_aluno_11,
      cpf_aluno_11: service.cpf_aluno_11,
      rg_aluno11: service.rg_aluno11,
      status_aluno_servico11: service.status_aluno_servico11,
      id_aluno_12: service.id_aluno_12,
      nome_aluno_12: service.nome_aluno_12,
      cpf_aluno_12: service.cpf_aluno_12,
      rg_aluno12: service.rg_aluno12,
      status_aluno_servico12: service.status_aluno_servico12,
      id_aluno_13: service.id_aluno_13,
      nome_aluno_13: service.nome_aluno_13,
      cpf_aluno_13: service.cpf_aluno_13,
      rg_aluno13: service.rg_aluno13,
      status_aluno_servico13: service.status_aluno_servico13,
      id_aluno_14: service.id_aluno_14,
      nome_aluno_14: service.nome_aluno_14,
      cpf_aluno_14: service.cpf_aluno_14,
      rg_aluno14: service.rg_aluno14,
      status_aluno_servico14: service.status_aluno_servico14,
      id_aluno_15: service.id_aluno_15,
      nome_aluno_15: service.nome_aluno_15,
      cpf_aluno_15: service.cpf_aluno_15,
      rg_aluno15: service.rg_aluno15,
      status_aluno_servico15: service.status_aluno_servico15,
      id_aluno_16: service.id_aluno_16,
      nome_aluno_16: service.nome_aluno_16,
      cpf_aluno_16: service.cpf_aluno_16,
      rg_aluno16: service.rg_aluno16,
      status_aluno_servico16: service.status_aluno_servico16,
      id_aluno_17: service.id_aluno_17,
      nome_aluno_17: service.nome_aluno_17,
      cpf_aluno_17: service.cpf_aluno_17,
      rg_aluno17: service.rg_aluno17,
      status_aluno_servico17: service.status_aluno_servico17,
      id_aluno_18: service.id_aluno_18,
      nome_aluno_18: service.nome_aluno_18,
      cpf_aluno_18: service.cpf_aluno_18,
      rg_aluno18: service.rg_aluno18,
      status_aluno_servico18: service.status_aluno_servico18,
      id_aluno_19: service.id_aluno_19,
      nome_aluno_19: service.nome_aluno_19,
      cpf_aluno_19: service.cpf_aluno_19,
      rg_aluno19: service.rg_aluno19,
      status_aluno_servico19: service.status_aluno_servico19,
      id_aluno_20: service.id_aluno_20,
      nome_aluno_20: service.nome_aluno_20,
      cpf_aluno_20: service.cpf_aluno_20,
      rg_aluno20: service.rg_aluno20,
      status_aluno_servico20: service.status_aluno_servico20,
    });
  }

  DeleteService(id: string) {
    this.serviceRef = this.db.object('services-list/' + id);
    this.serviceRef.remove();
  }

  //CRUD ORDENS PARA O SERVIÇO
  
  // Add Order for User
  addOrder(serviceId: string, order: Order) {
    const orderRef = this.db.object<Order>(`services-list/${serviceId}/orders/${order.id}`);
    return orderRef.set(order);
  }
  

  // Fetch Orders List for User
  getOrdersByService(serviceId: string) {
    return this.db.list(`services/${serviceId}/orders`).valueChanges();
  }

  // Update Order for User
  updateOrder(serviceId: string, orderId: string, order: Order) {
    this.serviceRef = this.db.object<Services>('services-list/' + serviceId);
    return this.serviceRef.update({
      orders: {
        [orderId]: order
      }
    });
  }

  // Delete Order for User
  deleteOrder(serviceId: string, orderId: string) {
    this.serviceRef = this.db.object<Services>('services-list/' + serviceId);
    return this.serviceRef.update({
      orders: {
        [orderId]: null
      }
    });
  }
  
}
