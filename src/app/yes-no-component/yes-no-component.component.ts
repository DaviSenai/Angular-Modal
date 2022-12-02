import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-yes-no-component',
  templateUrl: './yes-no-component.component.html',
  styleUrls: ['./yes-no-component.component.css']
})
export class YesNoComponentComponent {
  
  appService: AppService;

  apihref : string = "https://yesno.wtf/api";

  apiResponse : Object;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  getUrl() {
    if (this.apihref != "") {
      this.appService.getUrl(this.apihref).subscribe( resp => { this.apiResponse = resp } );
    }
  }
  

}
