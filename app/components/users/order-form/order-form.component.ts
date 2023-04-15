import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "../shared/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.scss"],
})
export class OrderFormComponent {
  orderForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      userId: ["", Validators.required],
      orderId: ["", Validators.required],
      description: ["", Validators.required],
    });

    // obter o valor do parâmetro da rota correspondente ao ID do usuário e definir o valor do campo userId do formulário
    const userId = this.route.snapshot.paramMap.get("id");
    this.orderForm.get("userId").setValue(userId);
    const now = new Date();
    const orderId = now.getTime().toString();
    this.orderForm.get("orderId").setValue(orderId);
  }

  onSubmit() {
    const userId = this.orderForm.value.userId;
    const orderId = this.orderForm.value.orderId;
    const order = {
      id: orderId,
      description: this.orderForm.value.description,
    };
    this.userService
      .addOrder(userId, order)
      .then(() => console.log("Order added successfully"))
      .catch((error) => console.log("Error adding order:", error));
    alert("Order Criado com Sucesso!!!");
    this.router.navigate(["/users"]);
    this.orderForm.reset();
  }
}
