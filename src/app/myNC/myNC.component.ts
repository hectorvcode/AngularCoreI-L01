import { Component } from "@angular/core";

@Component({
    selector: "app-mync",
    templateUrl: "./myNC.component.html",
    styleUrls: ["./myNC.component.css"]
})

export class MyNewComponent{
    name = 'Gallery';
    img = "https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page="
}