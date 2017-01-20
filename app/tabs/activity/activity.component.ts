/**
 * Created by huaifei.zhang on 2017/1/12.
 */
import {Component, OnInit} from '@angular/core';
// import {CardsData} from '../data/cards-data';
import {CardsService} from '../services/cards.service';

@Component({
  moduleId: module.id,
  selector:'tab-activity',
  template: `<atop-part [name$]="componentName"></atop-part>
<div *ngFor="let item of activityCards">{{item.id}}
<activity-cards [card]="item"></activity-cards>
</div>

`,
  // styles: ['.error {color:red;}'],
  providers:[CardsService]
})

export class ActivityComponent implements OnInit{
  errorMessage: string;
  data:any;
  public componentName = 'activity';
  private activityCards : any = null;

  constructor( private cardsService:CardsService){};

  ngOnInit() { this.getCards(); };

  getCards() {
    this.cardsService.getCards()
      .subscribe(
        data => this.activityCards = data,
        error =>  this.errorMessage = <any>error,
      )
  }

}
