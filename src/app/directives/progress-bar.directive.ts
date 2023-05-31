import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[appProgressBar]' })
export class ProgressBarDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}
}
