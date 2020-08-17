import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-accordion-item",
  templateUrl: "./accordion-item.component.html",
  styleUrls: ["./accordion-item.component.scss"],
  animations: [
    trigger("smoothCollapse", [
      state(
        "initial",
        style({
          height: "0",
          overflow: "hidden",
          opacity: "0",
          visibility: "hidden",
        })
      ),
      state(
        "final",
        style({
          overflow: "hidden",
        })
      ),
      transition("initial<=>final", animate("250ms")),
    ]),
    trigger("rotatedState", [
      state("default", style({ transform: "rotate(0)" })),
      state(
        "rotated",
        style({ transform: "rotate(-45deg)", textAlign: "center" })
      ),
      transition("default <=> rotated", animate("250ms")),
    ]),
    trigger("activeState", [
      state("inactive", style({ background: "white" })),
      state(
        "active",
        style({ background: "grey", color: "black", border: "0" })
      ),
    ]),
  ],
})
export class AccordionItemComponent implements OnInit {
  @Input() question: string;
  showBody = false;

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

  ngOnInit() {}

  toggle() {
    this.showBody = !this.showBody;
  }
}
