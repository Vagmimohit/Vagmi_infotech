import { Routes } from '@angular/router';

export const contentRoute: Routes = [
    { path: 'home', loadChildren: () => import('../../components/home/home.module').then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => import('../../components/about/about.module').then(m => m.AboutModule),data: {breadcrumb: { skip: true }} }
 
];