import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IListaFilmes } from '../models/IFilmeApi.model';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3';
  private key = '?api_key=ac9dc2cdb85a305aa150bafa31cd7b5d';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  buscarFilmes(busca: string): Observable<IListaFilmes> {
    const url = `${this.apiURL}/search/movie${this.key}&language=${this.lingua}&regions=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url)
      .pipe(
        map((retorno) => {
          console.log(retorno);
          return retorno;
        }), // retorna ele mesmo
        catchError((erro) => this.exibirErro(erro))
      );
  }

  async exibirErro(erro: any) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API.',
      duration: 2000,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
    return null; // para não dar erro
  }


}
