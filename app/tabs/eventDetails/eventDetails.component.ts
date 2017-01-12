/**
 * Created by huaifei.zhang on 2017/1/12.
 */
import { Component } from '@angular/core';

@Component({
  selector:'tab-eventDetails',
  template: `<h1>tab {{componentName}}</h1>`
})

export class EventDetailsComponent {
  componentName = 'eventDetails';

}
