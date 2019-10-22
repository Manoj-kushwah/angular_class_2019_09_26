import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNavbar]',

})
export class NavbarDirective implements OnInit{

  constructor(private el: ElementRef) {
    console.log("NavbarDirective: ", this);
    console.log("NavbarDirective: el ", el);
   }

   ngOnInit(){
     let div1: HTMLDivElement = this.el.nativeElement;
     div1.innerHTML = 'Logo';
   }

}
