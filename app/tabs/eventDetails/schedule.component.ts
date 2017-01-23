/**
 * Created by huaifei.zhang on 2017/1/20.
 */
import {Component} from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector:'schedule',
  template:`<h1>schedule</h1>
<button (click)="goBackEventDetails()">back to event details</button>
`

})


export class ScheduleComponent {
  constructor(private router:Router){}

  private goBackEventDetails(){
    this.router.navigate(['../eventDetails']);
  }

}
