import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventAppComponent } from './event-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventsThumbnailComponent} from './events/events-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import {EventService} from './shared/event.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import { Error404Component } from './shared/error404.component';
import {EventRouteActivatorGuard} from './event-details/event-route-activator.guard';


@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, EventRouteActivatorGuard],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
