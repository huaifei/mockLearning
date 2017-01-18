/**
 * Created by huaifei.zhang on 2017/1/18.
 */
import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:`
<h1>{{title1}} :</h1>
<nav>
  <a routerLink="/activity">Activity</a>
  <a routerLink="/eventDetails">EventDetails</a>
  <a routerLink="/participant">Participant</a>
  <a routerLink="/venue">Venue</a>
</nav>
<router-outlet></router-outlet>
`,
  styleUrls: [ 'app/tabs/app.component.css' ]
})

export class AppComponent{
  title1:"MyApp";
}
