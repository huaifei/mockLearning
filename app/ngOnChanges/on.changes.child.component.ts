/**
 * Created by huaifei.zhang on 2017/1/20.
 */
// import {Component, Input, OnChanges, SimpleChange } from '@angular/core';
//
// @Component ({
//   selector: 'on-changes-child',
//   template: `
//     <h3>Version {{major}}.{{minor}}</h3>
//     <h4>Change log:</h4>
//     <ul>
//       <li *ngFor="let change of changeLog">{{change}}</li>
//     </ul>
//   `
// })
//
// export class OnChangesChildComponent implements OnChanges{
//   @Input major:number;
//   @Input minor:number;
//   changelog:string[] = [];
//
//   ngOnChanges(changes:{[porpKey: string]:SimpleChange}){
//     let log: string[] = [];
//     for (let propName in changes){
//       let changedProp = changes[propName];
//       let from = JSON.stringify(changedProp.perviousValue);
//       let to = JSON.stringify(changedProp.currentValue);
//       log.push(`${propName} changed from ${from} to ${to}`);
//     }
//     this.changelog.push(log.join(', '));
//   }
//
// }
