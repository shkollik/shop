import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("mouseenter");
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("mouseleave");
    this.highlight("");
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}