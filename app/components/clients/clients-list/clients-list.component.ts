import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../shared/clients.service";
import { Clients } from "../shared/clients";
import { ToastrService } from "ngx-toastr";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.scss"],
})
export class ClientsListComponent implements OnInit {
  p: number = 1;
  Client!: Clients[];
  hideWhenNoClients: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public clientApi: ClientsService, public toastr: ToastrService) {}

  ngOnInit(): void {
    this.dataState();
    let s = this.clientApi.GetClientsList();
    s.snapshotChanges().subscribe((data) => {
      this.Client = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a["$key"] = item.key;
        this.Client.push(a as Clients);
      });
    });
  }

  dataState() {
    this.clientApi
      .GetClientsList()
      .valueChanges()
      .subscribe((data) => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoClients = false;
          this.noData = true;
        } else {
          this.hideWhenNoClients = true;
          this.noData = false;
        }
      });
  }

  deleteClient(Client) {
    if (window.confirm("Você realmente deseja excluir este cliente?")) {
      this.clientApi.DeleteClient(Client.$key);
      this.toastr.success("Cliente Deletado com Sucesso!!");
    }
  }

  printPdf() {
    // Colunas selecionadas
    const columns = [
      { header: "NOME", dataKey: "nome" },
      { header: "CNPJ", dataKey: "cnpj" },
      { header: "E-MAIL", dataKey: "email" },
    ];

    // Dados da tabela
    const rows = [];
    this.Client.forEach((client) => {
      const row = {
        nome: client.nome,
        cnpj: client.cnpj,
        email: client.email,
      };
      rows.push(row);
    });

    // Configurações do PDF
    const docDefinition = {
      content: [
        {
          text: "Relatório de Clientes (Geral)",
          style: "header",
        },
        {
          style: "table",
          table: {
            headerRows: 1,
            widths: ["*", "*", "*"],
            body: [columns.map((column) => column.header)].concat(
              rows.map((row) => columns.map((column) => row[column.dataKey]))
            ),
          },
          layout: {
            fillColor: function (i, node) {
              return i % 2 === 0 ? "#CCCCCC" : null;
            },
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          fontSize: 12,
          color: "black",
        },
        tableCell: {
          fontSize: 10,
          color: "black",
        },
      },
    };

    // Gera o PDF
    pdfMake.createPdf(docDefinition).download();
  }

  printPdf2() {
    // Colunas selecionadas
    const columns = [
      { header: "NOME", dataKey: "nome" },
      { header: "CNPJ", dataKey: "cnpj" },
      { header: "PERIODICIDADE DAS VISITAS", dataKey: "periodicidade_visitas" },
    ];

    // Dados da tabela
    const rows = [];
    this.Client.forEach((client) => {
      const row = {
        nome: client.nome,
        cnpj: client.cnpj,
        periodicidade_visitas: client.periodicidade_visitas,
      };
      rows.push(row);
    });

    // Configurações do PDF
    const docDefinition = {
      content: [
        {
          text: "Relatório de Clientes (Periodicidade)",
          style: "header",
        },
        {
          style: "table",
          table: {
            headerRows: 1,
            widths: ["*", "*", "*"],
            body: [columns.map((column) => column.header)].concat(
              rows.map((row) => columns.map((column) => row[column.dataKey]))
            ),
          },
          layout: {
            fillColor: function (i, node) {
              return i % 2 === 0 ? "#CCCCCC" : null;
            },
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          fontSize: 12,
          color: "black",
        },
        tableCell: {
          fontSize: 10,
          color: "black",
        },
      },
    };

    // Gera o PDF
    pdfMake.createPdf(docDefinition).download();
  }

  printPdf3() {
    // Colunas selecionadas
    const columns = [
      { header: "NOME", dataKey: "nome" },
      { header: "Rua", dataKey: "logradouro" },
      { header: "Bairro", dataKey: "bairro" },
      { header: "Estado", dataKey: "uf" },
      { header: "CEP", dataKey: "cep" },
    ];

    // Dados da tabela
    const rows = [];
    this.Client.forEach((client) => {
      const row = {
        nome: client.nome || "-",
        logradouro: client.logradouro || "-",
        bairro: client.bairro || "-",
        uf: client.uf || "-",
        cep: client.cep || "-",
      };
      rows.push(row);
    });

    // Configurações do PDF
    const docDefinition = {
      pageOrientation: "landscape",
      content: [
        {
          text: "Relatório de Clientes (Endereço)",
          style: "header",
          margin: [0, 0, 0, 20],
        },
        {
          style: "table",
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*", "*", "*"],
            body: [columns.map((column) => column.header)].concat(
              rows.map((row) => columns.map((column) => row[column.dataKey]))
            ),
          },
          layout: {
            fillColor: function (i, node) {
              return i % 2 === 0 ? "#CCCCCC" : null;
            },
            noBorders: true,
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: "black",
        },
        tableCell: {
          fontSize: 6,
          color: "black",
        },
      },
    };

    // Gera o PDF
    pdfMake.createPdf(docDefinition).download();
  }
}
