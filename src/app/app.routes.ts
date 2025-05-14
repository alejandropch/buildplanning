// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
  path: 'login',
  loadComponent: () =>
    import('./shared/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./shared/components/tasks/tasks.component').then(m => m.TasksComponent)
  },
  {
    path: 'task-details/:id',
    loadComponent: () =>
      import('./shared/components/task-details/task-details.component').then(m => m.TaskDetailsComponent)
  }
];
