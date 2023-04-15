import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cnpj",
})
export class CnpjPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "";

    const cnpj = value.replace(/\D/g, "");
    const primeiroGrupo = cnpj.substring(0, 2).toString();
    const segundoGrupo = cnpj.substring(2, 5).toString();
    const terceiroGrupo = cnpj.substring(5, 8).toString();
    const quartoGrupo = cnpj.substring(8, 12).toString();
    const quintoGrupo = cnpj.substring(12, 14).toString();

    return `${primeiroGrupo}.${segundoGrupo}.${terceiroGrupo}/${quartoGrupo}-${quintoGrupo}`;
  }
}
