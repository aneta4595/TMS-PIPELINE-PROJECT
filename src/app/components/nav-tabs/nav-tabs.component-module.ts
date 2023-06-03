import { NgModule } from '@angular/core';
import { NavTabsComponent } from './nav-tabs.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [NavTabsComponent],
  providers: [],
  exports: [NavTabsComponent],
})
export class NavTabsComponentModule {}
