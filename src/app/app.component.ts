import { Component, Input, OnInit,AfterContentInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit,OnChanges {
  title = 'CMSQuest';

contactId=''
/**
 *
 */

emailstr='asmaa'
emailName:any;
constructor( private communicationService: CommunicationService,) {
  
}
ngOnChanges(){
  this.communicationService.changeEmitted$.subscribe(data => {
    // here fetch data from the session storage 
    console.log(this.emailstr)
    this.emailName =data;
  })
}
  ngOnInit() {
 
  }
}
