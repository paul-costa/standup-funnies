import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HahaComponent } from './haha/haha.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'haha',
    pathMatch: 'full'
  },
  {
    path: 'haha',
    component: HahaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
