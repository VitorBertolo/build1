import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ServicesService } from "../shared/services.service";
import { AuthService } from "src/app/pages/home/auth.service";

@Component({
  selector: "app-order-form-services",
  templateUrl: "./order-form-services.component.html",
  styleUrls: ["./order-form-services.component.scss"],
})
export class OrderFormServicesComponent {
  orderForm: FormGroup;
  nomeUsuario: string;
  ocultarFormulario = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServicesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.nomeUsuario = this.authService.getNomeUsuarioAtual();
    this.orderForm = this.formBuilder.group({
      serviceId: ["", Validators.required],
      orderId: ["", Validators.required],
      description: ["", Validators.required],
      novoCampo: ["",Validators.required],
    });

    const serviceId = this.route.snapshot.paramMap.get("id");
    this.orderForm.get("serviceId").setValue(serviceId);
    const now = new Date();
    const orderId = now.getTime().toString();
    this.orderForm.get("orderId").setValue(orderId);
    this.orderForm.get("novoCampo").setValue("");
  }

  onSubmit() {
    const now = new Date();
    const serviceId = this.orderForm.value.serviceId;
    const orderId = this.orderForm.value.orderId;
    const novoCampoId = this.orderForm.value.novoCampoId;
    const order = {
      id: orderId,
      description: this.orderForm.value.description,
      novoCampo: this.orderForm.value.novoCampo,
    };
    this.serviceService
      .addOrder(serviceId, order)
      .then(() => console.log("Order added successfully"))
      .catch((error) => console.log("Error adding order:", error));
    alert("Histórico Atualizado com Sucesso");
    this.ocultarFormulario = true;
  }
}
