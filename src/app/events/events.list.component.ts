import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular events</h1>
      <hr />
      <event-thumbnail
        *ngFor="let event of events"
        [event]="event"
        class="col-md-5"
        (click)="handleThumbnailClick(event.name)"
      >
        ></event-thumbnail
      >
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
