/**
 * Created by huaifei.zhang on 2017/1/12.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector:'tab-eventDetails',
  templateUrl:'eventDetails.component.html'
})

export class EventDetailsComponent {
  constructor(private route:ActivatedRoute,private router:Router){}

  componentName = 'eventDetails';
  discription = 'The latest Angular release is 2.4. Learn about the latest updates to the documentation. View the Angular change log for enhancements, fixes, and breaking changes in Angular itself.';

  navigateToSchedule(){
    this.router.navigate(['./schedule'], {relativeTo:this.route});
  }

}
