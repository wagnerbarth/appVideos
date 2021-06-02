import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';

  listaVideos: IFilme[] = [
    {
      nome: 'Pets Monstruosos (2021)',
      lancamento: '02/04/2021',
      duracao: '6m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dkokENeY5Ka30BFgWAqk14mbnGs.jpg',
      generos: ['Animação', 'Comédia', 'Fantasia'],
    },
    {
      nome: 'Os Jovens Titãs em Ação (2013)',
      lancamento: '2013',
      duracao: '11m',
      classificacao: 66,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udaLIJ6Na7GOHjvTlyP9JFPTccv.jpg',
      generos: ['Comédia', 'Action & Adventure', 'Animação', 'Kids'],
    },
    {
      nome: 'Liga da Justiça (2001)',
      lancamento: '2001',
      duracao: '24m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ubwR6cwNEc4YAJGrzdND3qEsify.jpg',
      generos: ['Action & Adventure', 'Animação', 'Sci-Fi & Fantasy'],
    },
    {
      nome: 'Esquadrão Trovão (2021)',
      lancamento: '09/04/2021 (BR',
      duracao: '1h 47m',
      classificacao: 58,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Aej7rR73kpAKce6XXBLeqijAwPD.jpg',
      generos: ['Ação', 'Aventura', 'Comédia'],
    },
    {
      nome: 'Colheita Maldita (1984)',
      lancamento: '09/03/1984 (US)',
      duracao: '1h 33m',
      classificacao: 57,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/owGZCAje2VKrGGdwxM7peVwhErx.jpg',
      generos: ['Terror', 'Thriller'],
    }
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private dadosService: DadosService,
    private router: Router
  ) { }

  exibirFilme(filme: IFilme) {
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
          role: 'cancel', // regar de cancelamento
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
