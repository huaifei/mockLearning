import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
import { ActivityComponent }  from './tabs/activity/activity.component'
import { EventDetailsComponent }  from './tabs/eventDetails/eventDetails.component';
import { ParticipantComponent }  from './tabs/participant/participant.component';
import { VenueComponent }  from './tabs/venue/venue.component';


const routes: Routes = [
  // { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent },
  { path: 'activity',component: ActivityComponent },
  { path: 'eventDetails',component: EventDetailsComponent },
  { path: 'participant',component: ParticipantComponent },
  { path: 'venue',      component: VenueComponent },

  { path: '', redirectTo: '/activity', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
