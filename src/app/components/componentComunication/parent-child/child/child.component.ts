import { Component, Input, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Appchild implements OnInit {
  @Input() userNameInChild: any
  @Input() notifications: any[]
  @Output() newItemEvent = new EventEmitter<string>();

  @ViewChildren('allSpan') allSpan

  constructor() {
    console.log('inside constructure')

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes.userNameInChild.previousValue !== changes.userNameInChild.currentValue) {
      console.log('userNameInChild variable value has changed in parent')
    }
  }

  ngOnInit() {
    console.log('inside ngOnInit')
    console.log('inside ngOnInit', this.notifications)
    
  }

  addNewItem(valueInChild):void {
    console.log('valueInChild', valueInChild)
    this.newItemEvent.emit(valueInChild);
  }

  functionCalledFromParent() {
    debugger
    console.log("'I'm getting called from parent using viewchild")
    return "'I'm getting called from parent using viewchild"
  }

  ngAfterViewInit() {
    console.log('allSpan is ===>', this.allSpan)
    this.allSpan._results.forEach((element, index) => {
      console.log(element, index)
      this.allSpan._results[index].nativeElement.innerText = 'Appended using View children' + " " + this.allSpan._results[index].nativeElement.innerText 
    });
  }

}
