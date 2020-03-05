import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-notAuth',
  templateUrl: './notAuth.component.html',
  styleUrls: ['./notAuth.component.css']
})
export class NotAuthComponent implements OnInit {

  constructor(private errorService:ErrorService,  private route:ActivatedRoute) { }
  number:any
  error=''
  icon='Error'
  ngOnInit() {
      if(this.errorService.errorNumber=='0' && this.errorService.errorMsg!='')
      {
        this.error=this.errorService.errorMsg
        return
      }
      this.errorService.getAPMassage(this.errorService.errorNumber).pipe(first()).subscribe(result => {
        if(result.data){
            this.error = result.data.messageText;
            this.icon=result.data.icon.toLowerCase()
        }else{       
            this.error="Unknown Error"
            }
        
      });    
    
 
    // this.route
    // .data
    // .subscribe(error => {
  
    //   console.log(error.number)

    // })
  }

}
