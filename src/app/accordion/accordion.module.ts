import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionItemComponent } from "./accordion-item.component";
import { AccordionComponent } from "./accordion.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AccordionItemComponent, AccordionComponent],
  imports: [CommonModule, BrowserAnimationsModule, HttpClientModule],
  exports: [AccordionItemComponent, AccordionComponent],
})
export class AccordionModule {}
