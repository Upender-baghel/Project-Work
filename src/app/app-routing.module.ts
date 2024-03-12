import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './home/dash/dash.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {path:'dash',component:DashComponent}
  ]},
  { path: '', redirectTo: 'home/dash', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
