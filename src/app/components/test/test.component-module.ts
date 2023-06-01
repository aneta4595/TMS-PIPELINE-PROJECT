import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TestComponent],
  providers: [],
  exports: [TestComponent],
})
export class TestComponentModule {}
