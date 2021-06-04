import { IListaSeries } from './../models/ISerieApi.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3';
  private key = '?api_key=ac9dc2cdb85a305aa150bafa31cd7b5d';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  buscarTv(busca: string): Observable<IListaSeries> {
    const url = `${this.apiURL}/search/tv${this.key}&language=${this.lingua}&regions=${this.regiao}&query=${busca}`;

    return this.http.get<IListaSeries>(url)
      .pipe(
        map((retorno) => retorno), // retorna ele mesmo
        catchError((erro) => this.exibirErro(erro))
      );
  }


  async exibirErro(erro: any) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API. ' + JSON.stringify(erro),
      duration: 2000,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
    return null; // para não dar erro
  }
}
