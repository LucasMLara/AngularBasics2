import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}

// import { Directive, HostBinding, HostListener, Input } from '@angular/core';
// Aqui nao fecha ao clicar em qualquer lugar da TemplateLiteral, somente nos menus
// @Directive({
//   selector: '[appDropdown]',
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen: boolean = false;
//   @HostListener('click') toogleOpen() {
//     this.isOpen = !this.isOpen;
//   }
// }
