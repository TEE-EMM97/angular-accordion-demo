import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "accordion-demo";

  url = `http://localhost:4200/assets/faqs.json`;
  items = [];

  constructor(private http: HttpClient) {
    this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            this.items.push(data[key]);
          }
        }
        console.log(data);
      });
  }
}
