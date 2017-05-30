import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TeamCreatePage } from '../create/create';
import { TeamDetailPage } from '../detail/detail';

import { Item } from '../models/item';

import {Members} from '../../../providers/members';

@Component({
  selector: 'page-team-list',
  templateUrl: 'list.html',
  providers: [Members]
})
export class TeamListPage {
  public member: any;

  constructor(public navCtrl: NavController,public members: Members, public modalCtrl: ModalController){
    this.loadMembers();
  }

  loadMembers(){
    this.members.load()
    .then(data => {
      this.member = data;
    });
  }

  /**
   * 
   */
  openItem(member) {
    this.navCtrl.push(TeamDetailPage, {
      item: member
    });
  }


  /**
   * 
   * 
   */
  addItem() {
    let addModal = this.modalCtrl.create(TeamCreatePage);
    addModal.onDidDismiss(item => {
      if (member) {
        this.members.add(item);
      }
    })
    addModal.present();
  }

}
