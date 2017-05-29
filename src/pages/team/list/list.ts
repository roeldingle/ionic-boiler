import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TeamCreatePage } from '../create/create';
import { TeamDetailPage } from '../detail/detail';

import {Members} from '../../../providers/members';

@Component({
  selector: 'page-team-list',
  templateUrl: 'list.html',
  providers: [Members]
})
export class TeamListPage {
  public member: any;

  constructor(public members: Members){
    this.loadMembers();
  }

  loadMembers(){
    this.members.load()
    .then(data => {
      this.member = data;
    });
  }

}
