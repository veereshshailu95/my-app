import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-actiontwo',
  templateUrl: './actiontwo.component.html',
  styleUrls: ['./actiontwo.component.css']
})
export class ActiontwoComponent {

result:number=0;
  constructor(private comuctioncount:CommunicationService){

comuctioncount.countnumber.subscribe(
  (countdata:any)=>{
  this.result=countdata
})
  }

  sum(){
    this.comuctioncount.add()
  }
  sub(){
this.comuctioncount.sub()
  }
  mul(){
this.comuctioncount.mul()
  }
  div(){
this.comuctioncount.div()
  }
}
