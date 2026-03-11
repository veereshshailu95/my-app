import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private elementRef:ElementRef) { }       //[it's appply the employees]

  @HostListener('keyup')
  capita(){
    this.elementRef.nativeElement.value=this.elementRef.nativeElement.value.toUpperCase();
  }

}
