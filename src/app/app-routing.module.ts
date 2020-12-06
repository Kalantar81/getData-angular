import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicObservableComponent } from './components/basic-observable/basic-observable.component';





const routes: Routes = [
  {path: '', redirectTo: 'basicObservable', pathMatch: 'full'}, // '' will render to home component
  {path: 'basicObservable', component: BasicObservableComponent},

  {path: '**', component: BasicObservableComponent}  // '**' something goes wrong, will render to home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
