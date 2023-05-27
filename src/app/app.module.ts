import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PresentationComponentModule } from './components/presentation/presentation.component-module';
import { CardComponentModule } from './components/card/card.component-module';
import { TeamsPageComponentModule } from './components/teams-page/teams-page.component-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { NavigationComponentModule } from './components/navigation/navigation.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PresentationComponentModule,
    CardComponentModule,
    HomePageComponentModule,
    NavigationComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
