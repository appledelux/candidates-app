import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appIconDirective]',
})
export class IconDirective {
  @Input('appIconDirective') iconName!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerText',
      this.iconName
    );

    this.renderer.addClass(this.el.nativeElement, `icon-${this.iconName}`);
  }
}
