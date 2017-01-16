/**
 * Created by huaifei.zhang on 2017/1/12.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector:'tab-participant',
  template: `<h1>tab {{componentName}}</h1>`
})

export class ParticipantComponent {
  componentName = 'participant';

}
