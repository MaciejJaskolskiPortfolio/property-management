import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentListComponent } from './containers/agent-list/agent-list.component';


@NgModule({
  declarations: [
    AgentListComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
