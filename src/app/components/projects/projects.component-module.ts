import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { CardWithProgressComponentModule } from '../card-with-progress/card-with-progress.component-module';
import { CommonModule } from '@angular/common';
import { CardPresentationComponentModule } from '../card-presentation/card-presentation.component-module';

@NgModule({
  declarations: [ProjectsComponent],
  providers: [],
  exports: [ProjectsComponent],
  imports: [
    CardPresentationComponentModule,
    CardWithProgressComponentModule,
    CommonModule,
  ],
})
export class ProjectsComponentModule {}
