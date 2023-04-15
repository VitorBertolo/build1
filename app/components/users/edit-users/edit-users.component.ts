import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UsersService } from "../shared/user.service";
import { Observable, map } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Order } from "../shared/user";
import { ModalOrderComponent } from "./modal-order/modal-order.component";
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-edit-users",
  templateUrl: "./edit-users.component.html",
  styleUrls: ["./edit-users.component.scss"],
})
export class EditUsersComponent implements OnInit {
  editForm: FormGroup;
  userId: string;
  orders$: Observable<Order[]>;

  constructor(
    private usersApi: UsersService,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params["id"];
      this.orders$ = this.db
        .list(`users-list/${this.userId}/orders`)
        .valueChanges()
        .pipe(
          map((orders) => {
            return orders.map((order) => {
              return {
                id: order["id"],
                description: order["description"],
                date: new Date(order["date"]),
              };
            });
          })
        );
    });

    this.updateUsersData();
    const id = this.actRoute.snapshot.paramMap.get("id");
    this.getOrdersByUser(this.userId).subscribe((orders) => {
      this.orders$ = this.db
        .list<Order>("users-list/" + this.userId + "/orders")
        .valueChanges();
    });
    this.usersApi
      .GetUser(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  get nome() {
    return this.editForm.get("nome");
  }

  get email() {
    return this.editForm.get("email");
  }

  get senha() {
    return this.editForm.get("senha");
  }

  get telefone() {
    return this.editForm.get("telefone");
  }

  get funcao() {
    return this.editForm.get("funcao");
  }

  updateUsersData() {
    this.editForm = this.fb.group({
      nome: [""],
      email: [""],
      senha: [""],
      telefone: [""],
      funcao: [""],
    });
  }

  getOrdersByUser(userId: string) {
    return this.db.list(`users/${userId}/orders`).valueChanges();
  }

  updateForm() {
    this.usersApi.UpdateUser(this.editForm.value);
    this.toastr.success("Usuário Alterado com Sucesso!!!");
    this.router.navigate(["/users"]);
  }

  openModal() {
    this.dialog.open(ModalOrderComponent, { width: "1200px"});
  }
}
