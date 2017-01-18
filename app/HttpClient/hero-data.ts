/**
 * Created by huaifei.zhang on 2017/1/18.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class HeroData implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {heroes};
  }
}
