import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';  
  
@Directive({   
     selector: '[customTheme]'   
})  
export class CustomThemeDirective implements AfterViewInit {  
    @Input() tcolor: string;  
    @Input() bcolor: string;  
    @Input() tsize: string;   
    constructor(private elRef: ElementRef) {  
    }  
    ngAfterViewInit(): void {  
        debugger
       this.tcolor = this.tcolor || 'white'; 


       this.bcolor = this.bcolor || 'orange';  
       this.tsize = this.tsize || '20px';  
       
       this.elRef.nativeElement.style.color = this.tcolor;  
       this.elRef.nativeElement.style.backgroundColor = this.bcolor;  
       this.elRef.nativeElement.style.fontSize = this.tsize;  
    }     
}   