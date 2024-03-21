import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContantLayoutComponent } from './layout/contant-layout/contant-layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ContantLayoutComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    
  ]
  ,exports:[
    ContantLayoutComponent
  ]
})
export class ShareModule { }
