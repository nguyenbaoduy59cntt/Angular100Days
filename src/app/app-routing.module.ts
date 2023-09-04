import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day3Component } from './day3/day3.component';

const routes: Routes = [
  {
    path : 'Day3',
    component: Day3Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
