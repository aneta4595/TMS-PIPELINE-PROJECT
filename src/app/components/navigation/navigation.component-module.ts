import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [NavigationComponent],
  providers: [],
  exports: [NavigationComponent],
})
export class NavigationComponentModule {}
