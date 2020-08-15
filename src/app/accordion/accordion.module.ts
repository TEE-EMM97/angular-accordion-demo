import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionItemComponent } from "./accordion-item.component";
import { AccordionComponent } from "./accordion.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AccordionItemComponent, AccordionComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [AccordionItemComponent, AccordionComponent],
})
export class AccordionModule {}
