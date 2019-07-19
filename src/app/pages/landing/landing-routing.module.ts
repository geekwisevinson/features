import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HtmlComponent } from './pages/html/html.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'html', component: HtmlComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
