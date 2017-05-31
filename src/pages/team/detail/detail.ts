import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'detail.html'
})
export class TeamDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('item');
  }

}
