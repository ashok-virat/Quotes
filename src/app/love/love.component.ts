import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/services/quote.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {
public quotes;
public category;

  constructor(public service:QuoteService,public route:ActivatedRoute, public router:Router) {
    this.getlovequotes();
    this.category=this.route.snapshot.paramMap.get('category')
    console.log(this.category)
   }

  ngOnInit() {
  }
  public getlovequotes(){
   this.quotes=this.service.getlove();
   console.log(this.quotes)
  }

}
