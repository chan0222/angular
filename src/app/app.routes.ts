import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'practice1',
        pathMatch: 'full',
    },
    {
        path: 'practice1',
        loadComponent:() => import('./pages/practice1/practice1.component').then((m) => m.Practice1Component)
    },
    {
        path: 'simple-dialog',
        loadComponent:()=> import('./pages/simple-dialog/simple-dialog.component').then((m)=> m.SimpleDialogComponent)
    },
    {
        path: 'practice2',
       loadComponent:()=> import('./pages/practice2/practice2.component').then((m)=> m.Practice2Component)
    },
    {
        path: 'input-dialog',
        loadComponent:()=> import('./pages/input-dialog/input-dialog.component').then((m)=> m.InputDialogComponent)
    }
];
