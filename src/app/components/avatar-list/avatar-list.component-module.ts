import { NgModule } from '@angular/core';
import { AvatarListComponent } from './avatar-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [AvatarListComponent],
  providers: [],
  exports: [AvatarListComponent],
})
export class AvatarListComponentModule {}
