/**
 * Created by huaifei.zhang on 2017/1/20.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { PresenterComponent } from './presenter.component';

const eventDetailsRoutes : Routes = [
  {path:'eventDetails/schedule',component: ScheduleComponent},
  {path:'eventDetails/presenter',component: PresenterComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(eventDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class EventDetailsRoutingModule { }
