import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[appProgressBar]' })
export class ProgressBarDirective implements OnInit {
  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}

  @Input('appProgressBar') value?: number;
  @Input() maxValue!: number;

  ngOnInit(): void {
    if (this.value && this.maxValue) {
      const rate = Math.floor((this.value / this.maxValue) * 10) / 10;
      let bgClass = '';
      let width = '';

      if (rate <= 0.3) {
        bgClass = 'bg-danger';
        width = '33.33%';
      } else if (rate <= 0.6) {
        bgClass = 'bg-warning';
        width = '66.67%';
      } else {
        bgClass = 'bg-success';
        width = '100%';
      }
      this._renderer2.addClass(this._elementRef.nativeElement, bgClass);
      this._renderer2.setStyle(this._elementRef.nativeElement, 'width', width);
    }
  }
}
