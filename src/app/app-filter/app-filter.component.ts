import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.css']
})
export class AppFilterComponent implements OnInit {

  appService: AppService;

  // apihref : string = "https://api.artic.edu/api/v1/artworks";
  apihref : string = "https://gutendex.com/books/?languages=en";

  apiResponse : any;

  category = "";
  subjects = "";
  imgCover = "";

  constructor(appService: AppService) {
    this.appService = appService;
  }

  ngOnInit(): void {
    this.getUrl();
  }

  getUrl() {
    if (this.apihref != "") {
      this.appService.getUrl(this.apihref).subscribe( (response) => {this.apiResponse = response} );
    }
  }
  
  refreshTable(value, table) {
    setTimeout( () => {
      for (let i = 0; i < this.apiResponse.results.length; i++) {
        let obj = this.apiResponse.results[i];
        if (obj.title == value) {

          console.log(obj)

          this.category = "";
          for (let c = 0; c < obj.bookshelves.length; c++) {
            this.category += obj.bookshelves[c] + ", ";
          }
          
          this.subjects = "";
          for (let c = 0; c < obj.subjects.length; c++) {
            this.subjects += obj.subjects[c] + ", ";
          }
          
          this.imgCover = obj.formats['image/jpeg'];
          
          this.category = this.category || "Não informado"
          this.subjects = this.subjects || "Não informado"
          
        }
      }
      
    }, 2000 )
  }

}
