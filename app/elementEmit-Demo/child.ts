/**
 * Created by huaifei.zhang on 5/31/2017.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";

import {MyService } from './myService';

@Component({
  selector: 'child',
  template: `
  <p>{{title}}</p>
    <p>父组件数据：{{parentValue}}</p>
    <input type="text" #childInput (keyup)="onChanged(childInput.value)">
    <button (click)="onClick()">change title</button>
  `
})

export class childCmp{
  title: string;
  private _parentValue:string;
  constructor(private myService:MyService){
    this.title = myService.name;
  }

  @Input()
  get parentValue(): string {
    if(this._parentValue !== ''){
      return 'From:' + this._parentValue;
    }else{
      return '';
    }
  }
  set parentValue(value: string) {
    this._parentValue = value;
    if(value !== '')
      this.childValueChanged.emit('From:' + value);
  }

  @Output()
  childValueChanged = new EventEmitter<string>();

  onChanged(inputValue: string){
    this.childValueChanged.emit(inputValue);
  }

  onClick(){
    this.myService.name = "子组件";
  }

}
