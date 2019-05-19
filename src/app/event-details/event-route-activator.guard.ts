import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {

  constructor(private _eventService: EventService,
              private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const eventExist = !!this._eventService.getEvent(+next.params.id);

    if (!eventExist) {
      this._router.navigate(['/404']);
    }
    return true;
  }
}
