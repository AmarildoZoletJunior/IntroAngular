import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ForeachTesteComponent } from './components/foreach-teste/foreach-teste.component';
import { HttpTesteUmComponent } from './components/http-teste-um/http-teste-um.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path:'home',component: FirstComponentComponent},
  {path:'list',component:TwoWayBindingComponent},
  {path:'for',component:ForeachTesteComponent},
  {path:'book/:isbn',component:HttpTesteUmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
