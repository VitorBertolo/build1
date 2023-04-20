import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../shared/courses.service";
import { Courses } from "../shared/courses";
import { ToastrService } from "ngx-toastr";
import { PDFDocument } from "pdf-lib";
import { jsPDF } from "jspdf";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import html2canvas from "html2canvas";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-print-list-courses",
  templateUrl: "./print-list-courses.component.html",
  styleUrls: ["./print-list-courses.component.scss"],
})
export class PrintListCoursesComponent implements OnInit {
  editForm: FormGroup;
  Course!: Courses[];
  hideWhenNoUsers: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public courseApi: CoursesService,
    public toastr: ToastrService,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateCourseData();
    const id = this.actRoute.snapshot.paramMap.get("id");
    this.courseApi
      .getCourse(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  get nome_curso() {
    return this.editForm.get("nome_curso");
  }

  updateCourseData() {
    this.editForm = this.fb.group({
      nome_curso: [""],
      categoria1: [""],
      categoria3: [""],
      categoria2: [""],
      categoria4: [""],
      categoria5: [""],
      price: [""],
      carga_horaria_online: [""],
      carga_horaria_presencial: [""],
      carga_horaria_total: [""],
      cont_prog1: [""],
      cont_prog2: [""],
      cont_prog3: [""],
      cont_prog4: [""],
      cont_prog5: [""],
      cont_prog6: [""],
      cont_prog7: [""],
      cont_prog8: [""],
      cont_prog9: [""],
      cont_prog10: [""],
      cont_prog11: [""],
      cont_prog12: [""],
      cont_prog13: [""],
      cont_prog14: [""],
      cont_prog15: [""],
      cont_prog16: [""],
      cont_prog17: [""],
      cont_prog18: [""],
      cont_prog19: [""],
      cont_prog20: [""],
      cont_prog21: [""],
      cont_prog22: [""],
      cont_prog23: [""],
      cont_prog24: [""],
      cont_prog25: [""],
      cont_prog26: [""],
      cont_prog27: [""],
      cont_prog28: [""],
      cont_prog29: [""],
      cont_prog30: [""],
      cont_prog31: [""],
      cont_prog32: [""],
      cont_prog33: [""],
      cont_prog34: [""],
      cont_prog35: [""],
      cont_prog36: [""],
      cont_prog37: [""],
      cont_prog38: [""],
      cont_prog39: [""],
      cont_prog40: [""],
      cont_prog41: [""],
      cont_prog42: [""],
      cont_prog43: [""],
      cont_prog44: [""],
      cont_prog45: [""],
      cont_prog46: [""],
      cont_prog47: [""],
      cont_prog48: [""],
      cont_prog49: [""],
      cont_prog50: [""],
      cont_prog51: [""],
      cont_prog52: [""],
      cont_prog53: [""],
      cont_prog54: [""],
      cont_prog55: [""],
      cont_prog56: [""],
      cont_prog57: [""],
      cont_prog58: [""],
      cont_prog59: [""],
      cont_prog60: [""],
    });
  }

  printStyle = {
    table: { width: "100%" },
    td: { border: "1px solid black" },
    th: { border: "1px solid black" },
  };

  updateForm() {
    this.courseApi.UpdateCourse(this.editForm.value);
    this.toastr.success("Cliente Atualizado com Sucesso!!!");
    this.router.navigate(["/clients"]);
  }

  gerarPDF4() {
    // Define as informações da tabela

    const headers = ["Treinamento", "Empresa", "Cidade", "Tipo"];

    const headers2 = [
      "Instrutor",
      "Carga Horária Total",
      "Horário ínicio	",
      "Hora - Fim",
    ];
    const headers3 = [
      "Nome Aluno",
      "CPF",
      ".     /  / 2023",
      ".      /  / 2023",
      ".      /  / 2023",
      ".      /  / 2023",
      ".      /  / 2023",
    ];

    const headers4 = ["CONTEÚDO PROGRAMÁTICO"];

    const data = [[this.editForm.get("nome_curso").value, ".", ".", "."]];

    const data2 = [
      ["", this.editForm.get("carga_horaria_presencial").value, ".", "."],
    ];

    const data3 = [[".", ".", ".", ".", ".", ".", "."]];

    const data4 = [[this.editForm.get("cont_prog1").value]];

    const emptyRows = Array(14)
      .fill("")
      .map(() => {
        return [
          { text: ".", style: "cell" },
          { text: ".", style: "cell" },
          { text: ".", style: "cell" },
          { text: ".", style: "cell" },
          { text: ".", style: "cell" },
          { text: ".", style: "cell" },
          { text: ".", style: "cell" },
        ];
      });

    const tableBody = [headers, ...data, ...emptyRows];
    const tableColumnWidths = ["100%"];

    const image = new Image();
    image.src = "/assets/img/teste_pdf_lista.png";

    // Depois que a imagem é carregada, ela pode ser desenhada em um canvas
    image.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);

      // A imagem é convertida em uma representação de dados (data URL)
      const dataURL = canvas.toDataURL();

      // Define o conteúdo do documento PDF, intercalando o cabeçalho e o corpo da tabela
      const documentDefinition = [
        { image: dataURL, width: 770 },
        { text: ".", height: 20 },
        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*"],
            body: [headers, ...data],
            dontBreakRows: true, // Não quebrar linhas
          },
        },
        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*"],
            body: [headers2, ...data2],
            dontBreakRows: true, // Não quebrar linhas
          },
        },
        {
          table: {
            headerRows: 5,
            widths: ["*", "*", "*", "*", "*", "*", "*"],
            body: [headers3, ...data3, ...emptyRows],
            dontBreakRows: true, // Não quebrar linhas,
          },
        },
        {
          text: "",
          pageBreak: "before",
        },
        {
          table: {
            headerRows: 1,
            widths: tableColumnWidths,
            body: [headers4, ...data4],
          },
        },
        {
          table: {
            widths: ["*"],
            body: [
              [
                {
                  text: " ",
                  border: [false, true, false, false],
                },
              ],
              [
                {
                  text: "INSTRUTOR:",
                  border: [false, false, false, true],
                  alignment: "left",
                },
              ],
            ],
          },
        },
      ];

      // Adiciona o estilo do cabeçalho
      const styles = {
        header: {
          fontSize: 8,
          alignment: "left",
          bold: true,
          margin: [0, 0, 0, 10],
        },
        pageOrientation: "landscape", // Configura a página para paisagem
      };

      // Gera
      pdfMake
        .createPdf({
          content: documentDefinition,
          styles,
          pageOrientation: "landscape",
        })
        .download("treinamento.pdf");
    };
  }
}
