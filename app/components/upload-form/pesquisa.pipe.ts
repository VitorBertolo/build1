import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pesquisa",
})
export class PesquisaPipe implements PipeTransform {
  transform(pdfs: any[], termo: string): any[] {
    if (!pdfs || !termo) {
      return pdfs;
    }

    return pdfs.filter(
      (pdf) =>
        pdf.nomeUsuario.toLowerCase().includes(termo.toLowerCase()) ||
        pdf.description.toLowerCase().includes(termo.toLowerCase()) ||
        pdf.serviceOrigem.toLowerCase().includes(termo.toLowerCase())
    );
  }
}
