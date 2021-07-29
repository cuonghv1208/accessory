import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accessory/home', pathMatch: 'full' },
  {
    path: 'accessory',
    loadChildren: () => import('./client/client.module')
      .then(m => m.ClientModule),
  },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
