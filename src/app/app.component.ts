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
        console.log(data);
        for (let question in data) {
          if (data.hasOwnProperty(question)) {
            this.items.push(data[question]);
          }
        }
      });
  }
}
