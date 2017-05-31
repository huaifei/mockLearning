/**
 * Created by huaifei.zhang on 5/31/2017.
 */

import {childCmp} from './child';

import {Component} from '@angular/core';
import {MyService} from './myService';

@Component({
  selector: 'parent',
  directives: [childCmp],
  providers: [MyService],
  template:`
  <div>{{title}}</div>
    
    <p>这个数据来自子组件：{{childData}}</p>
    <input type="text" #parentInput (keyup)="parentData = parentInput.value"/>
  
    <button (click)="onclick()">获取标题</button>
  
    <child [parentValue]="parentInput.value" (childValueChanged)="childData=$event" ></child>
  `
})

export class parentCmp{
  title:string;
  childData:string;
  parentData:string;

  constructor(private myService:MyService){
    this.myService.changeName("父组件");
    this.title = myService.name;
  }

  onClick(){
    this.title = this.myService.name;
  }


}
