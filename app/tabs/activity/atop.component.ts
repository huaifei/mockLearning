/**
 * Created by huaifei.zhang on 2017/1/13.
 */
import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector:'atop-part',
  templateUrl: 'atop.component.html',
  styleUrls:['atop.component.css']
})

export class AtopComponent {
  @Input('name$') nem:string;
}
