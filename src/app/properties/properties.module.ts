import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyListComponent } from './containers/property-list/property-list.component';
import { PropertyFiltersComponent } from './components/property-filters/property-filters.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { PropertyResultsComponent } from './components/property-results/property-results.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';


@NgModule({
  declarations: [
    PropertyListComponent,
    PropertyFiltersComponent,
    PropertyFormComponent,
    PropertyResultsComponent,
    PropertyDetailsComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
