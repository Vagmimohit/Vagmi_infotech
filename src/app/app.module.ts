import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Breadcrumb, BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    RouterModule,
    HttpClientModule,
    BreadcrumbModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
