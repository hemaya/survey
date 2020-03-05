import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { QuestComponent } from './quest/quest.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CommunicationService } from './services/communication.service';
import { NotAuthComponent } from './notAuth/notAuth.component';
import { ErrorService } from './services/error.service';
import { ApiService } from './services/api.service';

@NgModule({
   declarations: [
      AppComponent,
      QuestComponent,
      NotAuthComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule
   ],
   providers: [
      CommunicationService,ErrorService,ApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
