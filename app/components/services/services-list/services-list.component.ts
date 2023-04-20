import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ServicesService } from "../shared/services.service";
import { Services } from "../shared/services";
import { FormsModule } from "@angular/forms";
import { AuthService } from "src/app/pages/home/auth.service";
import { AuthGuard } from "src/app/pages/home/auth.guard";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-services-list",
  templateUrl: "./services-list.component.html",
  styleUrls: ["./services-list.component.scss"],
})
export class ServicesListComponent implements OnInit {
  p: number = 1;
  Services!: Services[];
  hideWhenNoUsers: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  sortBy = "nome_tr";
  searchTerm: string = "";
  sortColumn: string = "";
  sortDirection: string = "asc";

  constructor(
    public serviceApi: ServicesService,
    public toastr: ToastrService,
    public AuthService: AuthService,
    public authService: AuthService,
    private authGuard: AuthGuard
  ) {}

  ngOnInit() {
    this.dataState();
    let s = this.serviceApi.GetServicesList();
    s.snapshotChanges().subscribe((data) => {
      this.Services = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a["$key"] = item.key;
        this.Services.push(a as Services);
      });
    });
  }

  dataState() {
    this.serviceApi
      .GetServicesList()
      .valueChanges()
      .subscribe((data) => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoUsers = false;
          this.noData = true;
        } else {
          this.hideWhenNoUsers = true;
          this.noData = false;
        }
      });
  }

  deleteService(service) {
    if (window.confirm("Você realmente deseja excluir este Serviço?")) {
      this.serviceApi.DeleteService(service.$key);
      this.toastr.success("Usuário Deletado com Sucesso!!");
    }
  }

  sort(columnName: string) {
    if (columnName === this.sortColumn) {
      // Se clicar na coluna atual, inverte a direção de ordenação
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      // Se clicar em uma nova coluna, define a nova coluna e a direção como ascendente
      this.sortColumn = columnName;
      this.sortDirection = "asc";
    }
  }

  getSortedServices(): any[] {
    const services = this.Services.slice(); // Cria uma cópia do array de serviços
    if (this.sortColumn) {
      // Ordena os serviços com base na coluna selecionada e na direção
      services.sort((a, b) => {
        const aValue = a[this.sortColumn];
        const bValue = b[this.sortColumn];
        if (aValue < bValue) {
          return this.sortDirection === "asc" ? -1 : 1;
        } else if (aValue > bValue) {
          return this.sortDirection === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    return services;
  }

  getNomeUsuarioAtual(): string {
    return this.AuthService.getNomeUsuarioAtual(); // <-- usando aqui
  }

  generatePDF() {
    const documentDefinition = {
      pageOrientation: 'landscape',
      content: [
        {
          table: {
            fillPage: true,
            headerRows: 1,
            widths: ['auto','*','*','*','*'],
            body: [
              [
                'KEY',
                'RESPONSAVEL',
                'EMPRESA',
                'DATA',
                'SITUAÇÃO | 1 = Urgente | 2 = Andamento | 3 = Finalizado'
              ],
              ...this.Services.map(services => [
                services.$key,
                services.responsavel,
                services.empresa,
                services.prazo_entrega,
                services.status_servico
              ])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }

}
