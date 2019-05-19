import {Routes} from '@angular/router';
import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/event-details/event-details.component';
import {Error404Component} from './app/shared/error404.component';
import {EventRouteActivatorGuard} from './app/event-details/event-route-activator.guard';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorGuard] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'}
];
