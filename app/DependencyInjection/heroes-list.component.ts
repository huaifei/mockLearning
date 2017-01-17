/**
 * Created by huaifei.zhang on 2017/1/17.
 */
import {Component} from '@angular/core';

import {EditItem} from './edit-item';
import { HeroesService } from './heroes.service';
import { Hero } from './hero';


@Component ({
  selector: 'heroes-list',
  template:`
<div>
  <ul>
    <li *ngFor="let editItem of heroes">
      <hero-card [hidden]="editItem.editing" [hero]="editItem.item"></hero-card>
      <button [hidden]="editItem.editing" (click)="editItem.editing = true">edit</button>
      <hero-editer [hidden]="!editItem.editing" [hero]="editItem.item"
      (saved)="onSaved(editItem,$event)" 
      (canceled)="onCanceled(editItem)"></hero-editer>
</li>
</ul>
</div>
`
})


export class HeroesListComponent {
  heroes: Array<EditItem<Hero>>;
  constructor(heroesService:HeroesService) {
    this.heroes = heroesService.getHeroes()
      .map(item => new EditItem(item));
  }

  onSaved (editItem:EditItem<Hero>, updatedHero:Hero){
    editItem.item = updatedHero;
    editItem.editing = false;
  }

  onCanceled (editItem:EditItem<Hero>){
    editItem.editing = false;
  }

}
