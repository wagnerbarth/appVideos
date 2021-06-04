import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { core } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.email === 'admin@admin.com' && this.senha === 'admin') {
      this.router.navigateByUrl('/tabs/tab1');
      this.exibirErro('Seja bem vindo!', 'success');
    } else {
      this.exibirErro('Erro usuário e/ou senha inválidos!', 'danger');
    }
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
