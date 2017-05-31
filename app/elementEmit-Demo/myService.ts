/**
 * Created by huaifei.zhang on 5/31/2017.
 */

import {Injectable} from "@angular/core";

@Injectable()

export class MyService
{
  name:string = "Origin Name";
  changeName(name:string){
    this.name = name;
  }
}
