import { NgModule } from '@angular/core';
import { SimpleCardComponent } from './simple-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [SimpleCardComponent],
  providers: [],
  exports: [SimpleCardComponent],
})
export class SimpleCardComponentModule {}
