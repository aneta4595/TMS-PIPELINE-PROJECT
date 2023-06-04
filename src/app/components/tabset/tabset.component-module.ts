import { NgModule } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [TabsetComponent],
  providers: [],
  exports: [TabsetComponent],
})
export class TabsetComponentModule {}
