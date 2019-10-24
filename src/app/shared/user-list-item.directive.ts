import { Directive, Input, OnInit, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appUserListItem]'
})
export class UserListItemDirective implements OnInit {
  @Input('data') d = null;

  @Output('openDetails') open: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click', ['$event', '$event.target'])
  clickHost(e, t){
    console.log('UserListItemDirective: clickHost: e ', e);
    console.log('UserListItemDirective: clickHost: t ', t);
    this.open.emit(this.d.role);
  }

  constructor(private el: ElementRef) { 
    console.log('UserListItemDirective: ', this);
  }

  ngOnInit(){
    console.log('UserListItemDirective: d: ', this.d);
  }

}
