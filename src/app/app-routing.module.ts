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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
