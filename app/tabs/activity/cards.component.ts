/**
 * Created by huaifei.zhang on 2017/1/19.
 */
import {Component,Input} from '@angular/core';
import {CardsData} from '../data/cards-data';


@Component({
  moduleId: module.id,
  selector:'activity-cards',
  templateUrl:'cards.component.html',
})

export class CardsComponent {
  @Input('card')card:any;


}
