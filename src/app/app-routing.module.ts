import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuropwComponent } from './components/europw/europw.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo:"home"},
  {path: "home", component:HomeComponent},
  {path: "europe", component:EuropwComponent},
  {path: "**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
