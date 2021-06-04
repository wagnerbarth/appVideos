import { IListaSeries, ISerieApi } from './../models/ISerieApi.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { GeneroService } from '../services/genero.service';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  titulo = 'Séries';

  listaSeries: IListaSeries;
  generos: string[] = [];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private dadosService: DadosService,
    private router: Router,
    private serieService: SerieService,
    private generoService: GeneroService
  ) { }

  ngOnInit() {
    this.generoService.buscarGeneros()
      .subscribe(
        (dados) => {
          console.log('Generos: ', dados);
          dados.genres.forEach((genero) => {
            this.generos[genero.id] = genero.name;
          });
        });

    this.dadosService.guardarDados('generos', this.generos);
  }

  buscarTv(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.serieService.buscarTv(busca)
        .subscribe((dados) => {
          console.log(dados);
          this.listaSeries = dados;
        });
    }
  }

  exibirFilme(filme: ISerieApi) {
    this.dadosService.guardarDados('filme', filme);
    this.router.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', // regra de cancelamento
          handler: (blah) => { // acionado ao cancel
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            // console.log('Confirm Okay');
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos!',
      color: 'success',
      animated: true,
      duration: 2000
    });
    toast.present();
  }

}
