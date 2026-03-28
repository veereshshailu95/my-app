import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

numberone:number=0
numbertwo:number=0;

countnumber:BehaviorSubject<number> = new BehaviorSubject(0);



add(){
const result = this.numberone + this.numbertwo;
this.countnumber.next(result)

}
sub(){
  const result = this.numberone-this.numbertwo
this.countnumber.next(result)

}
mul(){
  const result = this.numberone*this.numbertwo
this.countnumber.next(result)

}
div(){
  const result = this.numberone/this.numbertwo
this.countnumber.next(result)

}
  constructor() { }


}
