/**
 * Created by huaifei.zhang on 2017/1/17.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from './restore.service';
import { Hero } from './hero';


@Component({
  selector:'hero-editor',
  providers:[RestoreService],
  template:`
<div>

<span>Name:</span>
<input [(ngModel)]="hero.name">
<div>
<button (click)="onSaved()">save</button>
<button (click)="onCanceled()">cancel</button>
</div>
</div>
`
})

export class HeroEditorComponent {
  constructor(private restoreService:RestoreService<Hero>){}

  @Output() saved = new EventEmitter<Hero>();
  @Output() canceled = new EventEmitter<Hero>();

  @Input()
  set hero (hero:Hero){
    this.restoreService.setItem(hero);
  }

  get hero (){
    return this.restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this.restoreService.getItem());
  }

  onCanceled () {
    this.hero = this.restoreService.restoreItem();
    this.canceled.emit(this.hero);
  }

}
