import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contentRoute } from './share/route/content-route';
import { ContantLayoutComponent } from './share/layout/contant-layout/contant-layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '', component: ContantLayoutComponent, children: contentRoute, }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
