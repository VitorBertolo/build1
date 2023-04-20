import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "./usuario";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ServicesService } from "src/app/components/services/shared/services.service";
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  usuarioAtual: Usuario;
  serviceService: ServicesService;
  
  constructor(private router: Router, private afAuth: AngularFireAuth, public toastr: ToastrService,
    ) {}

  fazerLogin(usuario: Usuario) {
    if (
      usuario.email === "suporte@prosegmt.com.br" &&
      usuario.senha === "J5RTMGRRVW"
    ) {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.usuarioAtual = {
        nome: "Vitor Menezes",
        email: usuario.email,
        senha: usuario.senha,
        permissoes: ["admin"],
      };
      this.router.navigate(["/start"]);
    } else {
      if (
        usuario.email === "gerencia@prosegmt.com.br" &&
        usuario.senha === "N7WACR56G2"
      ) {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.usuarioAtual = {
          nome: "Gilson Jair",
          email: usuario.email,
          senha: usuario.senha,
          permissoes: ["admin"],
        };
        this.router.navigate(["/start"]);
      } else {
        if (
          usuario.email === "financeiro@prosegmt.com.br" &&
          usuario.senha === "T0BPOVDJN5"
        ) {
          this.usuarioAutenticado = true;
          this.mostrarMenuEmitter.emit(true);
          this.usuarioAtual = {
            nome: "Ana Paula",
            email: usuario.email,
            senha: usuario.senha,
            permissoes: ["admin"],
          };
          this.router.navigate(["/start"]);
        } else {
          if (
            usuario.email === "treinamentos@prosegmt.com.br" &&
            usuario.senha === "ZFXILR0T01"
          ) {
            this.usuarioAutenticado = true;
            this.mostrarMenuEmitter.emit(true);
            this.usuarioAtual = {
              nome: "Luis Paulo",
              email: usuario.email,
              senha: usuario.senha,
              permissoes: ["admin"],
            };
            this.router.navigate(["/start"]);
          } else {
            if (
              usuario.email === "atendimento@prosegmt.com.br" &&
              usuario.senha === "hu6fpPVlAc"
            ) {
              this.usuarioAutenticado = true;
              this.mostrarMenuEmitter.emit(true);
              this.usuarioAtual = {
                nome: "Karla de Lima Medeiros",
                email: usuario.email,
                senha: usuario.senha,
                permissoes: ["admin"],
              };
              this.router.navigate(["/start"]);
            } else {
              if (
                usuario.email === "segurancatrabalho@prosegmt.com.br" &&
                usuario.senha === "5L4wBEsRB6"
              ) {
                this.usuarioAutenticado = true;
                this.mostrarMenuEmitter.emit(true);
                this.usuarioAtual = {
                  nome: "Thais Cristina Blaschek",
                  email: usuario.email,
                  senha: usuario.senha,
                  permissoes: ["admin"],
                };
                this.router.navigate(["/start"]);
              } else {
                if (
                  usuario.email === "tst@prosegmt.com.br" &&
                  usuario.senha === "4LHNJ5ki61"
                ) {
                  this.usuarioAutenticado = true;
                  this.mostrarMenuEmitter.emit(true);
                  this.usuarioAtual = {
                    nome: "Bruna Gabrielly da Silva",
                    email: usuario.email,
                    senha: usuario.senha,
                    permissoes: ["admin"],
                  };
                  this.router.navigate(["/start"]);
                } else {
                  if (
                    usuario.email === "tst01@prosegmt.com.br" &&
                    usuario.senha === "GZ9Y841qUU"
                  ) {
                    this.usuarioAutenticado = true;
                    this.mostrarMenuEmitter.emit(true);
                    this.usuarioAtual = {
                      nome: "Alessandra Carine Guisso",
                      email: usuario.email,
                      senha: usuario.senha,
                      permissoes: ["admin"],
                    };
                    this.router.navigate(["/start"]);
                  } else {
                    if (
                      usuario.email === "tst02@prosegmt.com.br" &&
                      usuario.senha === "GZ9Y841qUU"
                    ) {
                      this.usuarioAutenticado = true;
                      this.mostrarMenuEmitter.emit(true);
                      this.usuarioAtual = {
                        nome: "Darlei Vinicius Bones Rosa",
                        email: usuario.email,
                        senha: usuario.senha,
                        permissoes: ["admin"],
                      };
                      this.router.navigate(["/start"]);
                    } else {
                      if (
                        usuario.email === "tst03@prosegmt.com.br" &&
                        usuario.senha === "GZ9Y841qUU"
                      ) {
                        this.usuarioAutenticado = true;
                        this.mostrarMenuEmitter.emit(true);
                        this.usuarioAtual = {
                          nome: "Claudemir Alves da Silva",
                          email: usuario.email,
                          senha: usuario.senha,
                          permissoes: ["admin"],
                        };
                        this.router.navigate(["/start"]);
                      } else {
                        if (
                          usuario.email === "tst04@prosegmt.com.br" &&
                          usuario.senha === "GZ9Y841qUU"
                        ) {
                          this.usuarioAutenticado = true;
                          this.mostrarMenuEmitter.emit(true);
                          this.usuarioAtual = {
                            nome: "Gabriely Kamila Barbosa Carvalho",
                            email: usuario.email,
                            senha: usuario.senha,
                            permissoes: ["admin"],
                          };
                          this.router.navigate(["/start"]);
                        } else {
                          if (
                            usuario.email === "tst05@prosegmt.com.br" &&
                            usuario.senha === "GZ9Y841qUU"
                          ) {
                            this.usuarioAutenticado = true;
                            this.mostrarMenuEmitter.emit(true);
                            this.usuarioAtual = {
                              nome: "Erica da Conceição Silva",
                              email: usuario.email,
                              senha: usuario.senha,
                              permissoes: ["admin"],
                            };
                            this.router.navigate(["/start"]);
                          } else {
                            if (
                              usuario.email === "tst06@prosegmt.com.br" &&
                              usuario.senha === "GZ9Y841qUU"
                            ) {
                              this.usuarioAutenticado = true;
                              this.mostrarMenuEmitter.emit(true);
                              this.usuarioAtual = {
                                nome: "Patricia Cristiane Roos",
                                email: usuario.email,
                                senha: usuario.senha,
                                permissoes: ["admin"],
                              };
                              this.router.navigate(["/start"]);
                            } else {
                              if (
                                usuario.email === "tst07@prosegmt.com.br" &&
                                usuario.senha === "GZ9Y841qUU"
                              ) {
                                this.usuarioAutenticado = true;
                                this.mostrarMenuEmitter.emit(true);
                                this.usuarioAtual = {
                                  nome: "Claudio Rogerio Grubert",
                                  email: usuario.email,
                                  senha: usuario.senha,
                                  permissoes: ["admin"],
                                };
                                this.router.navigate(["/start"]);
                              } else {
                                if (
                                  usuario.email === "tst08@prosegmt.com.br" &&
                                  usuario.senha === "GZ9Y841qUU"
                                ) {
                                  this.usuarioAutenticado = true;
                                  this.mostrarMenuEmitter.emit(true);
                                  this.usuarioAtual = {
                                    nome: "Bruna Souza Viana Pereira",
                                    email: usuario.email,
                                    senha: usuario.senha,
                                    permissoes: ["admin"],
                                  };
                                  this.router.navigate(["/start"]);
                                } else {
                                  if (
                                    usuario.email === "tst09@prosegmt.com.br" &&
                                    usuario.senha === "GZ9Y841qUU"
                                  ) {
                                    this.usuarioAutenticado = true;
                                    this.mostrarMenuEmitter.emit(true);
                                    this.usuarioAtual = {
                                      nome: "Carlos Henrique Blaschek Vargas",
                                      email: usuario.email,
                                      senha: usuario.senha,
                                      permissoes: ["admin"],
                                    };
                                    this.router.navigate(["/start"]);
                                  } else {
                                    if (
                                      usuario.email === "tst10@prosegmt.com.br" &&
                                      usuario.senha === "GZ9Y841qUU"
                                    ) {
                                      this.usuarioAutenticado = true;
                                      this.mostrarMenuEmitter.emit(true);
                                      this.usuarioAtual = {
                                        nome: "Luiz Carlos Blascheck Junior",
                                        email: usuario.email,
                                        senha: usuario.senha,
                                        permissoes: ["admin"],
                                      };
                                      this.router.navigate(["/start"]);
                                    } else {
                                      if (
                                        usuario.email === "tst11@prosegmt.com.br" &&
                                        usuario.senha === "GZ9Y841qUU"
                                      ) {
                                        this.usuarioAutenticado = true;
                                        this.mostrarMenuEmitter.emit(true);
                                        this.usuarioAtual = {
                                          nome: "Rosemeri Rosemar Roos",
                                          email: usuario.email,
                                          senha: usuario.senha,
                                          permissoes: ["admin"],
                                        };
                                        this.router.navigate(["/start"]);
                                      } else {
                                        if (
                                          usuario.email === "gerenciaband@prosegmt.com.br" &&
                                          usuario.senha === "GZ9Y841qUU"
                                        ) {
                                          this.usuarioAutenticado = true;
                                          this.mostrarMenuEmitter.emit(true);
                                          this.usuarioAtual = {
                                            nome: "Andrei",
                                            email: usuario.email,
                                            senha: usuario.senha,
                                            permissoes: ["admin"],
                                          };
                                          this.router.navigate(["/start"]);
                                        } else {
                                          if (
                                            usuario.email === "admband@prosegmt.com.br" &&
                                            usuario.senha === "GZ9Y841qUU"
                                          ) {
                                            this.usuarioAutenticado = true;
                                            this.mostrarMenuEmitter.emit(true);
                                            this.usuarioAtual = {
                                              nome: "Karila",
                                              email: usuario.email,
                                              senha: usuario.senha,
                                              permissoes: ["admin"],
                                            };
                                            this.router.navigate(["/start"]);
                                          } else {
                                            if (
                                              usuario.email === "atendimentoband@prosegmt.com.br" &&
                                              usuario.senha === "GZ9Y841qUU"
                                            ) {
                                              this.usuarioAutenticado = true;
                                              this.mostrarMenuEmitter.emit(true);
                                              this.usuarioAtual = {
                                                nome: "Andriellen",
                                                email: usuario.email,
                                                senha: usuario.senha,
                                                permissoes: ["admin"],
                                              };
                                              this.router.navigate(["/start"]);
                                            } else {
                                              if (
                                                usuario.email === "tstband01@prosegmt.com.br" &&
                                                usuario.senha === "GZ9Y841qUU"
                                              ) {
                                                this.usuarioAutenticado = true;
                                                this.mostrarMenuEmitter.emit(true);
                                                this.usuarioAtual = {
                                                  nome: "Andressa",
                                                  email: usuario.email,
                                                  senha: usuario.senha,
                                                  permissoes: ["admin"],
                                                };
                                                this.router.navigate(["/start"]);
                                              } else {
                                                if (
                                                  usuario.email === "tstband02@prosegmt.com.br" &&
                                                  usuario.senha === "GZ9Y841qUU"
                                                ) {
                                                  this.usuarioAutenticado = true;
                                                  this.mostrarMenuEmitter.emit(true);
                                                  this.usuarioAtual = {
                                                    nome: "Rafael",
                                                    email: usuario.email,
                                                    senha: usuario.senha,
                                                    permissoes: ["admin"],
                                                  };
                                                  this.router.navigate(["/start"]);
                                                } else {
                                                  if (
                                                    usuario.email === "tstband03@prosegmt.com.br" &&
                                                    usuario.senha === "GZ9Y841qUU"
                                                  ) {
                                                    this.usuarioAutenticado = true;
                                                    this.mostrarMenuEmitter.emit(true);
                                                    this.usuarioAtual = {
                                                      nome: "Victor",
                                                      email: usuario.email,
                                                      senha: usuario.senha,
                                                      permissoes: ["admin"],
                                                    };
                                                    this.router.navigate(["/start"]);
                                                  } else {
                                                    if (
                                                      usuario.email === "terceiro01@prosegmt.com.br" &&
                                                      usuario.senha === "GZ9Y841qUU"
                                                    ) {
                                                      this.usuarioAutenticado = true;
                                                      this.mostrarMenuEmitter.emit(true);
                                                      this.usuarioAtual = {
                                                        nome: "terceiro01",
                                                        email: usuario.email,
                                                        senha: usuario.senha,
                                                        permissoes: ["admin"],
                                                      };
                                                      this.router.navigate(["/start"]);
                                                    } else {
                                                      if (
                                                        usuario.email === "terceiro02@prosegmt.com.br" &&
                                                        usuario.senha === "GZ9Y841qUU"
                                                      ) {
                                                        this.usuarioAutenticado = true;
                                                        this.mostrarMenuEmitter.emit(true);
                                                        this.usuarioAtual = {
                                                          nome: "terceiro02",
                                                          email: usuario.email,
                                                          senha: usuario.senha,
                                                          permissoes: ["admin"],
                                                        };
                                                        this.router.navigate(["/start"]);
                                                      } else {
                                                        if (
                                                          usuario.email === "terceiro03@prosegmt.com.br" &&
                                                          usuario.senha === "GZ9Y841qUU"
                                                        ) {
                                                          this.usuarioAutenticado = true;
                                                          this.mostrarMenuEmitter.emit(true);
                                                          this.usuarioAtual = {
                                                            nome: "terceiro03",
                                                            email: usuario.email,
                                                            senha: usuario.senha,
                                                            permissoes: ["admin"],
                                                          };
                                                          this.router.navigate(["/start"]);
                                                        } else {
                                                          if (
                                                            usuario.email === "terceiro04@prosegmt.com.br" &&
                                                            usuario.senha === "GZ9Y841qUU"
                                                          ) {
                                                            this.usuarioAutenticado = true;
                                                            this.mostrarMenuEmitter.emit(true);
                                                            this.usuarioAtual = {
                                                              nome: "terceiro04",
                                                              email: usuario.email,
                                                              senha: usuario.senha,
                                                              permissoes: ["admin"],
                                                            };
                                                            this.router.navigate(["/start"]);
                                                          } else {
                                                            if (
                                                              usuario.email === "terceiro05@prosegmt.com.br" &&
                                                              usuario.senha === "GZ9Y841qUU"
                                                            ) {
                                                              this.usuarioAutenticado = true;
                                                              this.mostrarMenuEmitter.emit(true);
                                                              this.usuarioAtual = {
                                                                nome: "terceiro05",
                                                                email: usuario.email,
                                                                senha: usuario.senha,
                                                                permissoes: ["admin"],
                                                              };
                                                              this.router.navigate(["/start"]);
                                                            } else {
                                                              if (
                                                                usuario.email === "terceiro06@prosegmt.com.br" &&
                                                                usuario.senha === "GZ9Y841qUU"
                                                              ) {
                                                                this.usuarioAutenticado = true;
                                                                this.mostrarMenuEmitter.emit(true);
                                                                this.usuarioAtual = {
                                                                  nome: "terceiro06",
                                                                  email: usuario.email,
                                                                  senha: usuario.senha,
                                                                  permissoes: ["admin"],
                                                                };
                                                                this.router.navigate(["/start"]);
                                                              } else {
                                                                if (
                                                                  usuario.email === "terceiro07@prosegmt.com.br" &&
                                                                  usuario.senha === "GZ9Y841qUU"
                                                                ) {
                                                                  this.usuarioAutenticado = true;
                                                                  this.mostrarMenuEmitter.emit(true);
                                                                  this.usuarioAtual = {
                                                                    nome: "terceiro07",
                                                                    email: usuario.email,
                                                                    senha: usuario.senha,
                                                                    permissoes: ["admin"],
                                                                  };
                                                                  this.router.navigate(["/start"]);
                                                                } else {
                                                                  if (
                                                                    usuario.email === "terceiro08@prosegmt.com.br" &&
                                                                    usuario.senha === "GZ9Y841qUU"
                                                                  ) {
                                                                    this.usuarioAutenticado = true;
                                                                    this.mostrarMenuEmitter.emit(true);
                                                                    this.usuarioAtual = {
                                                                      nome: "terceiro08",
                                                                      email: usuario.email,
                                                                      senha: usuario.senha,
                                                                      permissoes: ["admin"],
                                                                    };
                                                                    this.router.navigate(["/start"]);
                                                                  } else {
                                                                    if (
                                                                      usuario.email === "terceiro09@prosegmt.com.br" &&
                                                                      usuario.senha === "GZ9Y841qUU"
                                                                    ) {
                                                                      this.usuarioAutenticado = true;
                                                                      this.mostrarMenuEmitter.emit(true);
                                                                      this.usuarioAtual = {
                                                                        nome: "terceiro09",
                                                                        email: usuario.email,
                                                                        senha: usuario.senha,
                                                                        permissoes: ["admin"],
                                                                      };
                                                                      this.router.navigate(["/start"]);
                                                                    } else {
                                                                      if (
                                                                        usuario.email === "terceiro10@prosegmt.com.br" &&
                                                                        usuario.senha === "GZ9Y841qUU"
                                                                      ) {
                                                                        this.usuarioAutenticado = true;
                                                                        this.mostrarMenuEmitter.emit(true);
                                                                        this.usuarioAtual = {
                                                                          nome: "terceiro10",
                                                                          email: usuario.email,
                                                                          senha: usuario.senha,
                                                                          permissoes: ["admin"],
                                                                        };
                                                                        this.router.navigate(["/start"]);
                                                                      } else {
                                                                        if (
                                                                          usuario.email === "teste@prosegmt.com.br" &&
                                                                          usuario.senha === "123"
                                                                        ) {
                                                                          this.usuarioAutenticado = true;
                                                                          this.mostrarMenuEmitter.emit(true);
                                                                          this.usuarioAtual = {
                                                                            nome: "Usuario Para Teste",
                                                                            email: usuario.email,
                                                                            senha: usuario.senha,
                                                                            permissoes: ["admin"],
                                                                          };
                                                                          this.router.navigate(["/start"]);
                                                                        } 
            else {
              Swal.fire({
                title: 'ERRO',
                text: 'Usuario ou Senha Incorretos! Tente Novamente',
                icon: 'error',
                confirmButtonText: 'X'
              })             
              this.usuarioAutenticado = false;
              this.mostrarMenuEmitter.emit(false);
            }
          }
        }
      }
    }
  }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  getNomeUsuarioAtual(): string {
    return this.usuarioAtual.nome;
  }
}
