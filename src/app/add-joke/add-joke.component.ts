import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/services/quote.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {
public quote:string;
  Author: any;
  category: string;
 public categories;
  constructor(public service:QuoteService,public route:ActivatedRoute,public router:Router) { 

    this.categories=this.route.snapshot.paramMap.get('category')
  }

  ngOnInit() {
  }
  public createBlog():any {
    let Data={
      quote:this.quote,
      author:this.Author,

    }
   
    this.service.setJokes(this.categories,Data)
  
  }

}
