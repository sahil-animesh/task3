import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilestoneComponent } from './milestone/milestone.component';
import { NothingComponent } from './nothing/nothing.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  {path:"",component:NothingComponent},
  {path:"milestone", component:MilestoneComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"task", component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
