import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../../providers/providers';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'detail.html'
})
export class TeamDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

}
