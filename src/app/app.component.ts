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
