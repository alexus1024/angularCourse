import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'dropdown');

    }

    @HostListener('click') onClick() {
        this.el.nativeElement.classList.toggle('show');

        const menuEl = this.el.nativeElement.querySelector('div.dropdown-menu');
        menuEl.classList.toggle('show');
    }
}
