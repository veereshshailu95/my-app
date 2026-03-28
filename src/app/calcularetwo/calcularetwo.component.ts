import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-calcularetwo',
  templateUrl: './calcularetwo.component.html',
  styleUrls: ['./calcularetwo.component.css']
})
export class CalcularetwoComponent {

numberone:number=0;
numbertwo:number=0;
  constructor(private countcomuction:CommunicationService){

  }
  sendvalue() {
    this.countcomuction.numberone=this.numberone;   //[chivarilo numberone service lo unde :number one]
    this.countcomuction.numbertwo=this.numbertwo     //[chivarilo numbertwo service lo unde :number two]
  }
}
