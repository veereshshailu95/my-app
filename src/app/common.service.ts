import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  cartCount:number=0;

  //creat
  cartCountsub:BehaviorSubject<number>=new BehaviorSubject(0)

  //set  [button incres]
  setCount(){
    this.cartCount++;
    this.cartCountsub.next(this.cartCount);
  }




  //get
  getCount(){
    return this.cartCountsub.asObservable();
  }

  constructor() { }
}
