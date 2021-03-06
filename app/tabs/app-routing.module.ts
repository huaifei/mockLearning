import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityComponent }  from './activity/activity.component'
import { EventDetailsComponent }  from './eventDetails/eventDetails.component';
import { ParticipantComponent }  from './participant/participant.component';
import { VenueComponent }  from './venue/venue.component';

// import { ScheduleComponent } from  './eventDetails/schedule.component';
// import { PresenterComponent } from './eventDetails/presenter.component';


const routes: Routes = [
  { path: 'activity',component: ActivityComponent },
  {
    path: 'eventDetails',
    component: EventDetailsComponent,
    // children: [
    //   {path:'schedule',component: ScheduleComponent},
    //   {path:'presenter',component: PresenterComponent}
    // ]
  },
  { path: 'participant',component: ParticipantComponent },
  { path: 'venue',      component: VenueComponent },

  { path: '', redirectTo: '/activity', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
