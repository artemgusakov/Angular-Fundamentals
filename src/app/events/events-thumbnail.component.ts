import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: 'events-thumbnail.component.html'
})

export class EventsThumbnailComponent {
  @Input() event: any;
  @Output() confirmEvent = new EventEmitter()

  confirm() {
    this.confirmEvent.emit(this.event);
  }
}
