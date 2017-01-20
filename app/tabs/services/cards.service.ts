/**
 * Created by huaifei.zhang on 2017/1/19.
 */
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
// import { Hero }     from '../hero';

@Injectable()
export class CardsService {
  // private cardsUrl = '../data/cards-data';
  private cardsUrl = 'app/heroes';

  constructor(private http:Http) {};

  getCards(): Observable<any> {
    return this.http.get(this.cardsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response){
    let body = res.json();
    return body.data || { };
  }

  private handleError(error:Response|any){
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
