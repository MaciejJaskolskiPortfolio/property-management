import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MainRoutes, NavLink } from '../core/modes';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  fillerNav: NavLink[] = [
    { label: 'Schedule', route: MainRoutes.SCHEDULE },
    { label: 'Properties', route: MainRoutes.PROPERTIES },
    { label: 'Agents', route: MainRoutes.AGENTS },
    { label: 'Profile', route: MainRoutes.PROFILE },
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
