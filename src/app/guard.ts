import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export class Guard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return confirm('Are you shoore, you have an access here?');
    // return ("if you are not Andrew - any Andrew - please don't go to this page");
    // return true;
  }
}
