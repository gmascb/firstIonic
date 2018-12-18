import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }


  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(false);
  }

  login(){//this.navCtrl.push('CategoriasPage'); empilha uma pagina na oura (apresenta o botao de voltar)
    this.navCtrl.setRoot('CategoriasPage'); // seta a pagina como principal (apresenta o toggle menu)
  }
}