import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../../providers/providers';

@Component({
  selector: 'page-notification-detail',
  templateUrl: 'detail.html'
})
export class NotificationDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

}
