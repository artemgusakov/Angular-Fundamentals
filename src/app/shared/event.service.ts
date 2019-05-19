import {Injectable} from '@angular/core';

@Injectable()
export class EventService {

  constructor() {
  }

  public getEvents() {
    return [{
      id: 1,
      name: 'Test1',
      date: '9/26/2036',
      time: '10:00 am',
      price: 600,
      imageUrl: 'assets/angular.png',
      location: {
        address: 'address',
        city: 'City',
        country: 'Country'
      }
    }];
  }

  getEvent(id: number) {
    console.log('id', id);
    const filter = this.getEvents().find(el => el.id === +id);
    console.log(filter);
    return filter;
  }
}
