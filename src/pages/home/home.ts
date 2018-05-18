import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BartrixPage } from '../bartrix/bartrix';
import { StHuBarPage } from '../sthubar/sthubar';
import { FlorinesBarPage } from '../florinesbar/florinesbar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

bartrix = BartrixPage
sthubar = StHuBarPage
florinesbar = FlorinesBarPage
  constructor(public navCtrl: NavController) {

  }

}
