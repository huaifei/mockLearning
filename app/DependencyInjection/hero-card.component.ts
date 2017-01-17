/**
 * Created by huaifei.zhang on 2017/1/17.
 */

import{Component , Input} from '@angular/core';

import {Hero } from './hero';

@Component({
  selector: 'hero-card',
  template: `
<div>
<span>Name:</span>
<span>{{hero.name}}</span>
</div>
`
})

export class HeroCardComponent {
  @Input() hero:Hero;
}
