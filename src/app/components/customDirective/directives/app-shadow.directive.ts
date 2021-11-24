
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppShadow]'
})
export class AppShadowDirective {

    constructor(private elementRef: ElementRef, ) { 
      elementRef.nativeElement.style.backgroundColor = "pink" 
    }
}
