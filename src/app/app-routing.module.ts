import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'candidates',
    children: [
      {
        path: '',
        redirectTo: 'candidates',
        pathMatch: 'full',
      },
      // {
      //   path: 'create',
      //   component: null
      // },
      // {
      //   path: 'viewer',
      //   component: null
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
