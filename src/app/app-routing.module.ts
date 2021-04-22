import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrainingLogComponent } from './components/training-log/training-log.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'traininglog', component: TrainingLogComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
