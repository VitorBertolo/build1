import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UsersService } from "../shared/user.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable, map, startWith } from "rxjs";

@Component({
  selector: "app-add-users",
  templateUrl: "./add-users.component.html",
  styleUrls: ["./add-users.component.scss"],
})
export class AddUsersComponent implements OnInit {
  public userForm!: FormGroup;

  itemName: string;
  itemTags: string[] = [];
  tagCtrl = new FormControl();
  allTags: Observable<string[]>;
  separatorKeysCodes: number[] = [13, 188];
  itemCategory: string;
  fruitCtrl = new FormControl("");
  filteredFruits: Observable<string[]>;
  allFruits: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];
  @ViewChild("fruitInput") fruitInput: ElementRef<HTMLInputElement>;
  selectedFruits: any;
  UsersService: any;


  constructor(
    public usersApi: UsersService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private db: AngularFireDatabase,
    private firebaseService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.usersApi.GetUsersList();
    this.useForm();
  }

  useForm() {
    this.userForm = this.fb.group({
      nome: [""],
      email: [""],
      senha: [""],
      telefone: [""],
      funcao: [""],
    });
  }

  get nome() {
    return this.userForm.get("nome");
  }

  get email() {
    return this.userForm.get("email");
  }

  get senha() {
    return this.userForm.get("senha");
  }

  get telefone() {
    return this.userForm.get("telefone");
  }

  get funcao() {
    return this.userForm.get("funcao");
  }

  resetForm() {
    this.userForm.reset();
  }

  submitUsersData() {
    this.usersApi.AddUser(this.userForm.value);
    this.toastr.success("Usuário Criado com Sucesso!!!");
    this.resetForm();
    this.router.navigate(["/users"]);
  }
 
}
