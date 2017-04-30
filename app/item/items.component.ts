import { Component, OnInit } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

//import LocalNotifications = require("nativescript-local-notifications");
import * as LocalNotifications from "nativescript-local-notifications";
import * as LocalStorage from "nativescript-localstorage";
import * as ApplicationSettings from "application-settings";
import * as Toast from "nativescript-toast";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    counter = 0;

    constructor(
        private itemService: ItemService,
        private fonticon: TNSFontIconService
        ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    showNotification() {
        LocalNotifications.schedule([{
        id: 223,
        title: 'The title',
        body: 'The body',
        at: new Date(new Date().getTime() + (10 * 1000))
      }]).then(
        onValue => {
          console.log("ID's: ");
        },
        error => {
          LocalNotifications.cancelAll();
        })
    }

    storeValues(){
        let username = LocalStorage.getItem("username");
        console.log("Uname" + username);
        if(!username){
            LocalStorage.setItem("username", "RIjin");
        }
        //console.log("Uname: " + LocalStorage.getItem("username"));
    }
    storeValuesInAppSettings(){
        let hello =  ApplicationSettings.getString('hello');
        console.log("Name " + hello);
        
        if(!hello){
            ApplicationSettings.setString('hello', 'Rijin');
        }else{
            Toast.makeText(hello).show();
        }
    }
}
