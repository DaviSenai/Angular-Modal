import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.css']
})
export class AppFilterComponent {

  appService: AppService;

  apihref : string = "https://api.domainsdb.info/v1/domains/search?domain=facebook";

  apiResponse : Object;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  getUrl(domain) {
    if (this.apihref != "") {
      console.log( this.appService.getUrl(this.apihref) );
    }
  }
  
  refreshTable(value, table) {
    this.getUrl("facebook");
    setTimeout( () => {
      // for (let domain in this.apiResponse.domains.length)
      console.log(this.apiResponse)
    }, 2000 )
  }

}
