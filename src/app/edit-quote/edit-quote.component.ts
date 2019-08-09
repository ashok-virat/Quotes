import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/services/quote.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {
  blogid: any;
public info;
  quote: any;
  Author: any;
  constructor(public service:QuoteService,public route:ActivatedRoute,public router:Router) { 

    this.blogid=this.route.snapshot.paramMap.get('id')
    this.info=this.service.editquote(this.blogid);
    console.log(this.info)
  }

  ngOnInit() {
  }
 
  public backtohome(){
    setTimeout(()=>{
      this.router.navigate(['/home','jokes'])
    },2000)
  }
 

}
