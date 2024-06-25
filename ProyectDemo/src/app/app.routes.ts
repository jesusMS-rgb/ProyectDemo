import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: '',
        loadChildren: () => import('./admin/principal/admin.module')
            .then(m => m.AdminModule)
    }
];
