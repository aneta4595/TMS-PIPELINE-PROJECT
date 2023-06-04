import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleCardComponentModule } from './components/simple-card/simple-card.component-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { NavigationComponentModule } from './components/navigation/navigation.component-module';
import { EmployeeDetailComponentModule } from './components/employee-detail/employee-detail.component-module';
import { CardPresentationComponentModule } from './components/card-presentation/card-presentation.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleCardComponentModule,
    HomePageComponentModule,
    NavigationComponentModule,
    EmployeeDetailComponentModule,
    CardPresentationComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
