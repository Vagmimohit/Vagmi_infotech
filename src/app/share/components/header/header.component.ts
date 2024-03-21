import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuData: any;
  constructor(public _dataservice:DataService){
  this._dataservice.getMenuData().subscribe(res=>{
  
    this.menuData =res.menu;
    console.log("header navbar data here ",this.menuData)
    
  })

  }
  
}
