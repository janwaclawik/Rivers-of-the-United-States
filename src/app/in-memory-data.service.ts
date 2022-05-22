import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Missisipi', lenght: '3 766 km', source: 'Lake Itasca', mouth: 'Gulf of Mexico' },
      { id: 13, name: 'Missouri', lenght: '3 767 km', source: 'Browers Spring', mouth: 'Mississippi River'   },
      { id: 14, name: 'Ohio', lenght: '1 579 km', source: 'Allegheny', mouth: 'Mississippi River'   },
      { id: 15, name: 'Colorado', lenght: '2 334 km', source: 'La Poudre Pass Lake', mouth: 'Gulf of California'   },
      { id: 16, name: 'Rio Grande', lenght: '3 034 km', source: 'San Juan Mountains', mouth: 'Gulf of Mexico'   },
      { id: 17, name: 'Arkansas', lenght: '2 364 km', source: 'Rocky Mountains', mouth: 'Mississippi River'   },
      { id: 18, name: 'Jukon', lenght: '3 190 km', source: 'Atlin Lake', mouth: 'Bering Sea'   },
      { id: 19, name: 'Snake', lenght: '1 735 km', source: 'Góry Skaliste', mouth: 'Lake Wallula'   },
      { id: 20, name: 'Pecos', lenght: '1 490 km', source: 'Pecos Falls', mouth: 'Rio Grande'   }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}