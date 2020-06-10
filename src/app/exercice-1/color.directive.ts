import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW =38,
  RIGHT_ARROW = 39,
  DOWN_ARROW=	40
}

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit{

  

  constructor(private el : ElementRef) { }

  ngOnInit() {
   
  }
  @HostListener('window:keyup', ['$event'])
   keyEvent(event: KeyboardEvent) { 
     if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.el.nativeElement.style.color='blue'
     }
 
     if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.el.nativeElement.style.color='red'
     }
     if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.el.nativeElement.style.color='green'
     }
 
     if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.el.nativeElement.style.color='orange'
     }
   }
}
