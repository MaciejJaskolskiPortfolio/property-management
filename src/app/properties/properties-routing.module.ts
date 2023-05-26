import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { PropertyListComponent } from './containers/property-list/property-list.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PropertyListComponent,
      },
      {
        path: 'details',
        children: [
          {
            path: ':id',
            children: [
              {
                path: '',
                component: PropertyDetailsComponent,
              },
              {
                path: 'edit',
                component: PropertyFormComponent,
              },
            ],
          },
        ],
      },
      {
        path: ':id',
        component: PropertyFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesRoutingModule {}
