import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';

/* about origin demo */
// import { InMemoryDataService }  from './in-memory-data.service';
// import { HeroesComponent }  from './heroes.component';
// import { DashboardComponent }  from './dashboard.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import { AppComponent }  from './app.component';
// import { AppRoutingModule }     from './app-routing.module';
// import { HeroService } from './hero.service';


/* -- mock tabs Events -- */
import { AppComponent }  from './tabs/app.component';
import { AppRoutingModule }     from './tabs/app-routing.module';
import { EventDetailsRoutingModule }     from './tabs/eventDetails/event.details.module';
import { InMemoryLearningDataService }  from './tabs/in-memory-learning-data.service';

import { ActivityComponent }  from './tabs/activity/activity.component';
import { AtopComponent }  from './tabs/activity/atop.component';
import { CardsComponent }  from './tabs/activity/cards.component';
import { EventDetailsComponent }  from './tabs/eventDetails/eventDetails.component';
import { ScheduleComponent } from  './tabs/eventDetails/schedule.component';
import { PresenterComponent } from './tabs/eventDetails/presenter.component';
import { ParticipantComponent }  from './tabs/participant/participant.component';
import { VenueComponent }  from './tabs/venue/venue.component';


/* -- dependency injection -- */
import { HeroCardComponent }  from './DependencyInjection/hero-card.component';
import { HeroEditorComponent }  from './DependencyInjection/hero-editor.component';
import { HeroesListComponent }  from './DependencyInjection/heroes-list.component';
import { HeroesService }  from './DependencyInjection/heroes.service';

/* -- HTTP client demo -- */
// import { HeroData }                 from './HttpClient/hero-data';
//
// import { AppComponent }             from './HttpClient/app.component';
//
// import { HeroListComponent }        from './HttpClient/toh/hero-list.component';
// import { HeroListPromiseComponent } from './HttpClient/toh/hero-list.component.promise';
// import { WikiComponent }            from './HttpClient/wiki/wiki.component';
// import { WikiSmartComponent }       from './HttpClient/wiki/wiki-smart.component';


/* Pipe demo */
// import { ExponentialStrengthPipe }     from './Pipe/customPipe';
// import { PowerBoostCalculatorComponent }     from './Pipe/power-boost-calculator.component';


/* on changes demo*/
// import {OnChangesChildComponent} from './ngOnChanges/on.changes.child.component';
// import {OnChangesParentComponent} from './ngOnChanges/on.changes.parent.component';

/* -- Form -- */
import { HeroFormComponent } from './Form/hero-form.component';


/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */

/* -- mock Learning Events -- */
// @NgModule({
//   imports:      [
//     BrowserModule,
//     FormsModule,
//     AppRoutingModule,
//     HttpModule,
//     EventDetailsRoutingModule,
//     InMemoryWebApiModule.forRoot(InMemoryLearningDataService),
//   ],
//   declarations: [
//     AppComponent,
//
//     ActivityComponent,
//     EventDetailsComponent,
//     ParticipantComponent,
//     VenueComponent,
//     AtopComponent,
//     CardsComponent,
//     PresenterComponent,
//     ScheduleComponent,
//
//   ],
//   providers:    [
//     // HeroService
//   ],
//   bootstrap:    [
//     AppComponent
//   ]
// })



    /* -- Dependency Injection -- */
// @NgModule({
//   imports:      [
//     BrowserModule,
//     FormsModule,
//   ],
//   declarations: [
//     HeroCardComponent,
//     HeroEditorComponent,
//     HeroesListComponent,
//   ],
//   providers:    [
//     HeroesService
//   ],
//   bootstrap:    [
//     HeroesListComponent
//   ]
// })


/* -- HTTP client demo -- */
// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule,
//     JsonpModule,
//     InMemoryWebApiModule.forRoot(HeroData)
//   ],
//   declarations: [
//     AppComponent,
//     HeroListComponent,
//     HeroListPromiseComponent,
//     WikiComponent,
//     WikiSmartComponent
//   ],
//   bootstrap: [ AppComponent ]
// })


/* -- Form -- */
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    // AppComponent,
    HeroFormComponent,
  ],
  bootstrap:    [
    HeroFormComponent
  ]
})


export class AppModule { }
