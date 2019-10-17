import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { DataMapService } from '../shared/data-map.service';

@Component({
    selector: 'app-contact1',
    template: '<h1>Contact</h1>',
})
export class ContactComponent implements OnInit {
    constructor(private dataMap: DataMapService){
        console.log("ContactComponent: ", dataMap);
    }
    ngOnInit(){

    }
}