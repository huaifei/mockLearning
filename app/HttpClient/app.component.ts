/**
 * Created by huaifei.zhang on 2017/1/18.
 */
import { Component }         from '@angular/core';

// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
    <hero-list></hero-list>
    <hero-list-promise></hero-list-promise>
    <my-wiki></my-wiki>
    <my-wiki-smart></my-wiki-smart>
  `
})
export class AppComponent { }
