import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HtmlComponent } from './pages/html/html.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
  ],
  declarations: [LandingComponent, HtmlComponent]
})
export class LandingModule { }
