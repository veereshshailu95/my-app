import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {      //[it's apply the directive , vehicles,flipkart]
    return "Rs."+value+"/-";
  }

}
