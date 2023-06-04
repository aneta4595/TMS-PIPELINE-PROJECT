import { NgModule } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { RouterModule } from '@angular/router';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, SimpleCardComponentModule, CommonModule],
  declarations: [TabsetComponent],
  providers: [],
  exports: [TabsetComponent],
})
export class TabsetComponentModule {}
