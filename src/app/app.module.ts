import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteService } from 'src/services/quote.service';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { RouterModule } from '@angular/router';
import { AddJokeComponent } from './add-joke/add-joke.component';
import {FormsModule} from '@angular/forms';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { MotivationComponent } from './motivation/motivation.component';
import { LoveComponent } from './love/love.component';
@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent,
    AddJokeComponent,
    EditQuoteComponent,
    MotivationComponent,
    LoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home/:category',component:QuoteBoxComponent},
       {path:"add/:category",component:AddJokeComponent},
       {path:'motivation/:category',component:MotivationComponent},
       {path:'love/:category',component:LoveComponent},
       {path:'edit/:id',component:EditQuoteComponent}
    ])
  ],
  providers: [
    QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
