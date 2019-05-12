import {Component} from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent {

  event = {
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
  };

  confirmHandler($event: any) {
    console.log($event);
  }
}
