import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Directive({ selector: '[appCursorPointer]' })
export class CursorPointerDirective {
  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}
  private _pointerSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public pointer$: Observable<boolean> = this._pointerSubject.asObservable();

  @HostListener('mousedown', ['$event'])
  onMouseDown() {
    this._pointerSubject.next(true);
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'cursor',
      'pointer'
    );
  }
  @HostListener('document: mousemove', ['$event'])
  onMouseMove() {
    if (!this.pointer$) {
      return;
    }
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'cursor',
      'pointer'
    );
  }
  @HostListener('mouseup', ['$event'])
  onMouseUp() {
    this._pointerSubject.next(false);
    this._renderer2.setStyle(this._elementRef.nativeElement, 'cursor', 'auto');
  }
}
