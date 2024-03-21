import { Component } from '@angular/core';
import { DataService } from 'src/app/share/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private _dataservice: DataService) {
console.log("data here is about")
// this._dataservice.Breadcrumb.next(true);
  }
  ngOnInit(): void {
this._dataservice.Breadcrumb.next(true);
  

  }
  ngOnDestroy(){
    this._dataservice.Breadcrumb.next(false);
  }
}
