import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class0925';
  myAppName: string ;
  nameFlag: boolean = false;
  listOfItem:Array<string> = ["1 Item","2 Item","3 Item","4 Item","5 Item","6 Item","7 Item","8 Item","9 Item","10 Item"];
  constructor(){
    this.onClickAppName();
  }

  public onClickAppName(event?: any): void {
    console.log("AppComponent event: ", event);
    this.nameFlag = !this.nameFlag;
    if (this.nameFlag) {
      this.myAppName =  "Sandeep yadav";
    } else {
      this.myAppName =  "Manoj kushwah";
    }
  }


  public onKeyPressFromInput(e?:any): void {
    console.log("AppComponent e: ", e);
  }
  

}
