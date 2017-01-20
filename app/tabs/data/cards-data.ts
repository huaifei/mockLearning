/**
 * Created by huaifei.zhang on 2017/1/19.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CardsData implements InMemoryDbService {
  createDb() {
    let cardsInfo = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {cardsInfo};
  }
}
