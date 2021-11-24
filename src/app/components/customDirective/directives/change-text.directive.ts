import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appChangeText]'
})
export class ChangeTextDirective {

    constructor(Element: ElementRef) {
        debugger;
        console.log(Element);
        Element.nativeElement.innerText = "Text is changed by changeText Directive. ";
    }

}