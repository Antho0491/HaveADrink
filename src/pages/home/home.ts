import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BartrixPage } from '../bartrix/bartrix';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

bartrix = BartrixPage
  constructor(public navCtrl: NavController) {

  }

}
