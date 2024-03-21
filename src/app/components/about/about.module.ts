import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { DigitalbusicnesscardComponent } from './digitalbusicnesscard/digitalbusicnesscard.component';
import { BreadcrumbModule } from 'xng-breadcrumb';


@NgModule({
  declarations: [
    AboutComponent,
    DigitalbusicnesscardComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    BreadcrumbModule,
  ]
})
export class AboutModule { }
