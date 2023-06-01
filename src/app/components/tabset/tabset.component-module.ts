import { NgModule } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [TabsetComponent],
  providers: [],
  exports: [TabsetComponent],
})
export class TabsetComponentModule {}
