import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotes-app',
  templateUrl: './quotes-app.component.html',
  styleUrls: ['./quotes-app.component.css']
})
export class QuotesAppComponent implements OnInit {

  constructor( private myapi:ApiService) {
    this.fetchData()
   }

fetchData=()=>{
  this.myapi.quotesData().subscribe(
    (data)=>{
      this.quoteList=data
    }
  )
}
  quoteList:any= {}
  ngOnInit(): void {
  }

}
