import { Component, OnInit } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

import LocalNotifications = require("nativescript-local-notifications");

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

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
}
