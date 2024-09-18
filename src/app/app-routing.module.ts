import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesPageComponent } from './pages/candidates-page/candidates-page.component';

const routes: Routes = [
  {
    path: 'candidates',
    component: CandidatesPageComponent,
  },
  {
    path: '',
    redirectTo: 'candidates',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
