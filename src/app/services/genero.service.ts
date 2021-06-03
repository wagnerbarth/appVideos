import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=ac9dc2cdb85a305aa150bafa31cd7b5d';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }


  buscarGeneros(): Observable<IListaGenero> {
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url)
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
      message: 'Erro ao consultar API Generos. ',
      duration: 2000,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
    return null; // para não dar erro
  }

}
