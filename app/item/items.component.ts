import { Component, OnInit } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

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
}
