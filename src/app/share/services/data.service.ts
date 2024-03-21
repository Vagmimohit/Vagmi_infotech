import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = './assets/data/data.json';
  home: string = './assets/data/home.json';
  Breadcrumb =new Subject<boolean>();
  constructor(public http:HttpClient) { 


  }

    getMenuData(): Observable<any> {
      return this.http.get<any>(this.url);
    }

    getHomeData(): Observable<any> {
      return this.http.get<any>(this.home);
    }
  
}
