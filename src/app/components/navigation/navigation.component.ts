import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  private _hamburgerMenuSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public hamburgerMenu$: Observable<boolean> =
    this._hamburgerMenuSubject.asObservable();

  showHamburgerMenu() {
    this.hamburgerMenu$
      .pipe(
        take(1),
        tap(() =>
          this._hamburgerMenuSubject.next(!this._hamburgerMenuSubject.value)
        )
      )
      .subscribe();
  }
}
