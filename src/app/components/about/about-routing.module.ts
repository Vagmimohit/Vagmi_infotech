import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DigitalbusicnesscardComponent } from './digitalbusicnesscard/digitalbusicnesscard.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: AboutComponent, data: { breadcrumb: {alias: 'about'} }},
      { path: 'digitalcard', component: DigitalbusicnesscardComponent, data: { breadcrumb: {alias: 'digitalcard'} }},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
