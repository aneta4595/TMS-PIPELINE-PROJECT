import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { CardWithProgressComponentModule } from '../card-with-progress/card-with-progress.component-module';
import { CommonModule } from '@angular/common';
import { CardsRowComponentModule } from '../cards-row/cards-row.component-module';

@NgModule({
  declarations: [ProjectsComponent],
  providers: [],
  exports: [ProjectsComponent],
  imports: [
    PresentationComponentModule,
    CardWithProgressComponentModule,
    CommonModule,
    CardsRowComponentModule,
  ],
})
export class ProjectsComponentModule {}
