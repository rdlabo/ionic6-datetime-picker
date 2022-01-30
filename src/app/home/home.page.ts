import { Component, ViewChild } from '@angular/core';
import { format, parseISO } from 'date-fns';
import {IonAccordionGroup} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segmentTypes = ['accordion', 'modal', 'popover'];
  segmentValue = 'accordion';
  popoverValue: string;
  modalValue: string;
  accordionValue: string;
  multiAccordionValue = '2022-01-30';
  multiAccordionDatetimeType: 'month-year' | 'date' = 'month-year';

  constructor() {}

  changeDate(value: string, inlineEl = undefined, accordion = undefined) {
    if (inlineEl) {
      inlineEl.dismiss();
    } else if (accordion) {
      accordion.value = undefined;
    }
    return format(parseISO(value), 'yyyy-MM-dd');
  }

  openMultiAccordion(accordionEl: IonAccordionGroup, type: 'month-year' | 'date') {
    if (accordionEl.value === undefined) {
      this.multiAccordionDatetimeType = type;
      accordionEl.value = 'open-multi';
    } else {
      accordionEl.value = undefined;
    }
  }

}
