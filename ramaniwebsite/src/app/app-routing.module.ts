import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImagesComponent} from './images/images.component';
import {ImageComponent} from './image/image.component';

const routes: Routes = [
  {path: '', component: ImagesComponent},
  {path: 'image', component: ImageComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
