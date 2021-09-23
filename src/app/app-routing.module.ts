import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'leave',
    loadChildren: () => import('./leave management system/leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: '',
    redirectTo: 'leave',
    pathMatch: 'full'
  },
  {
    path: 'add-leave',
    loadChildren: () => import('./leave management system/add-leave/add-leave.module').then( m => m.AddLeavePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
