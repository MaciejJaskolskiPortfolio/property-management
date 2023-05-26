import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutes } from '../core/modes';

const routes: Routes = [
  {
    path: MainRoutes.AGENTS,
    loadChildren: () =>
      import('./agents/agents.module').then((m) => m.AgentsModule),
    data: {
      breadcrumb: 'Agents',
    },
  },
  {
    path: MainRoutes.PROPERTIES,
    loadChildren: () =>
      import('./properties/properties.module').then((m) => m.PropertiesModule),
    data: {
      breadcrumb: 'Properties',
    },
  },
  {
    path: MainRoutes.PROFILE,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    data: {
      breadcrumb: 'My Profile',
    },
  },
  {
    path: MainRoutes.SCHEDULE,
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.ScheduleModule),
    data: {
      breadcrumb: 'Schedule',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
