import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/services/quote.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {
  quotes: { quote: string; author: string; }[];
   public category;
  constructor(public quoteService:QuoteService,public route:ActivatedRoute, public router:Router) {
    this.category=this.route.snapshot.paramMap.get('category')
    console.log(this.category)
    this.getquotes();
  }

  ngOnInit() {
  }
    public getquotes(){
      this.quotes=this.quoteService.Motivation;
      console.log(this.quotes)
    }
}
