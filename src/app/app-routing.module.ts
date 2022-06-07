import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { MeetusComponent } from './meetus/meetus.component';


const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'about',
  component:AboutusComponent
},
{
  path:'meetus',
  component:MeetusComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
