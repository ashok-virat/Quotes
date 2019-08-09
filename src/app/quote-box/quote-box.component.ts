import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/services/quote.service';
import { Quote } from 'src/models/quote.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
   public Quotes;
   public quotess;
   public category;
  constructor(public quoteService:QuoteService,public route:ActivatedRoute, public router:Router) { 
    console.log('constructor is called')
    this.category=this.route.snapshot.paramMap.get('category')
    console.log(this.category)
   this.getQuote();
  }  
  ngOnInit() {
  }

  public getQuote(){
    this.Quotes=this.quoteService.getRandomQuote();
    console.log(this.Quotes)
  }
   
}
