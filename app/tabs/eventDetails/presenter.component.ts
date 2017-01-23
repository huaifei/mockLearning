/**
 * Created by huaifei.zhang on 2017/1/20.
 */
import {Component} from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector:'presenter',
  template:`<h1>presenter</h1>
<button (click)="goBackEventDetails()">back to event details</button>
`
})


export class PresenterComponent {
  constructor(private router:Router){}

  private goBackEventDetails(){
    this.router.navigate(['../eventDetails']);
  }


}
