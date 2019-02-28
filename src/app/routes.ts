import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events.list.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'events/session/new', component: CreateSessionComponent }
];
