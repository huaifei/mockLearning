/**
 * Created by huaifei.zhang on 2017/1/19.
 */
import { Pipe, PipeTransform} from '@angular/core';

@Pipe ({name:'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform{
  transform(value:number,exponent:string):number{
    let exp = parseFloat(exponent);
    return Math.pow(value,isNaN(exp)?1:exp);
  }
}


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
