import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class0925';
  flage_1: boolean = false;
  imageNo: number = 1;
  myAppName: string ;
  nameFlag: boolean = false;
  listOfItem:Array<string> = ["1 Item","2 Item","3 Item","4 Item","5 Item","6 Item","7 Item","8 Item","9 Item","10 Item"];
  constructor(){
    this.onClickAppName();
  }

  public hideImage(): void{
    this.flage_1=true;
  }

  public showImage(): void{
    this.flage_1=false;
  }

  public increment(): void{
    if(this.imageNo>4) {
      this.imageNo = 0;
    }
    this.imageNo++;
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
