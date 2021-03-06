import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector:'my-app',
  template:` 
           <h1>{{title}}</h1>
           <my-hero></my-hero>
<nav> 
  <a routerLink="/dashboard">DashBoard</a>
  <a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
          `,
  styleUrls: [ 'app/app.component.css' ]
})

export class AppComponent{
  title:'myApp';
}
