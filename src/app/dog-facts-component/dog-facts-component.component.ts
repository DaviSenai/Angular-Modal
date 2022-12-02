import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dog-facts-component',
  templateUrl: './dog-facts-component.component.html',
  styleUrls: ['./dog-facts-component.component.css']
})
export class DogFactsComponentComponent {

  appService: AppService;

  apihref : string = "https://dog-api.kinduff.com/api/facts";

  apiResponse : Object;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  getUrl() {
    if (this.apihref != "") {
      this.appService.getUrl(this.apihref).subscribe( resp => { this.apiResponse = resp } );
    }
    setTimeout( () => {console.log(this.apiResponse)}, 1500 )
  }

}
