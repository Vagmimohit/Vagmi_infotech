import { Component } from '@angular/core';
import { DataService } from 'src/app/share/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeourData: any;
  homebolgData: any;
  sericesbolg: any;
  sericesheading: any;
  content: any;
  Meeting: any
  selectedFrameTitle: any;

  //hiding info box
  visible: boolean = false

  constructor(private _dataservice: DataService) {
    this._dataservice.getHomeData().subscribe((res: any) => {

      this.homeourData = res.Home.ourservice;
      this.homebolgData = res.Home.ourblog;
      this.sericesbolg = res.Home.sections;
      this.content = res.Home.RecentPortfolio;
      this.Meeting = res.Home.Meet_Our_Team;

      console.log("home data here", this.Meeting)


    })
  }



  onclick(title: any) {
    // var data = this.sericesbolg[0].content;
    // data.forEach((f:any) => {
    //   console.log("for loop data here",f);
    //   if(frame == f.title){
    //     this.ReadMore = !this.ReadMore; //not equal to condition


    //   }else{
    //     this.visible = !this.visible
    //   }

    // });
    // console.log("data here hoemm",frame);
    // this.ReadMore = !this.ReadMore; //not equal to condition
    // this.visible = !this.visible
    if (this.selectedFrameTitle === title) {
      // If the same frame is clicked again, deselect it
      this.selectedFrameTitle = "";
    } else {
      // Otherwise, set the selected frame title
      this.selectedFrameTitle = title;
    }
  }

}
