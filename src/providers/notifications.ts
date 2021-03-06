import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

/*
  Generated class for the MemberServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Notifications {

  data: any;
  url: string = 'https://randomuser.me/api/';

  constructor(public http: Http, public api: Api) {
  }

  load() {
      if (this.data) {
        // already loaded data
        return Promise.resolve(this.data);
      }

      // don't have the data yet
      return new Promise(resolve => {
        // We're using Angular HTTP provider to request the data,
        // then on the response, it'll map the JSON data to a parsed JS object.
        // Next, we process the data and resolve the promise with the new data.
        this.http.get(this.url + '?results=10')
          .map(res => res.json())
          .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
      });
    }

}
