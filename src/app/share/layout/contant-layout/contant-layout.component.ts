import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contant-layout',
  templateUrl: './contant-layout.component.html',
  styleUrls: ['./contant-layout.component.css']
})
export class ContantLayoutComponent {
  Breadcrumb: boolean = false;
  constructor(private _dataservice: DataService) {

  }
  ngOnInit(): void {
    this._dataservice.Breadcrumb.subscribe(res => {
      this.Breadcrumb = res;
    });
  }
  
}
