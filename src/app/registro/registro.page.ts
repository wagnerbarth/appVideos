import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IRegistro } from '../models/IRegistro.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registro: IRegistro = {
    nome: 'wagner',
    cpf: '123456789',
    dataNascimento: '24/08/1968',
    genero: '',
    email: 'wagner@barth.com',
    senha: '123456'
  };

  confirmaSenha: string;

  constructor(
    private toastController: ToastController,
    private dadosService: DadosService
  ) { }

  ngOnInit() {
  }

  registrar() {
    this.dadosService.guardarDados('usuario', this.registro);
  }

  testarUsuario(){
    const teste = this.dadosService.pegarDados('usuario');
    console.log(teste);
  }



  async exibirErro(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }



}
