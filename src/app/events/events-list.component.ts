import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {

  public events: any[];

  constructor(private eventService: EventService) {}

  confirmHandler($event: any) {
    console.log($event);
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
