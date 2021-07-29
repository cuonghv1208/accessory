import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoryLayoutComponent } from 'src/customs/layouts/accessory-layout/accessory-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: AccessoryLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }