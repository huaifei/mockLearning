import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:` 
           <!--<h1>{{title}}</h1>-->
           <!--<my-hero></my-hero>-->
<nav> 
  <!--<a routerLink="/dashboard">DashBoard</a>-->
  <!--<a routerLink="/heroes">Heroes</a>-->
  <a routerLink="/activity">Activity</a>
  <a routerLink="/eventDetails">EventDetails</a>
  <a routerLink="/participant">Participant</a>
  <a routerLink="/venue">Venue</a>
</nav>
<router-outlet></router-outlet>
          `,
  styleUrls: [ 'app/app.component.css' ]
})

export class AppComponent{
  title:'myApp';
}
