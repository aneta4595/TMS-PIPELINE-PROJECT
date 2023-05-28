import { NgModule } from '@angular/core';
import { AvatarListComponent } from './avatar-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [AvatarListComponent],
  providers: [],
  exports: [AvatarListComponent],
})
export class AvatarListComponentModule {}
