import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvancedComponent } from './advanced/advanced.component';


const routes: Routes = [
	{  path: '',      component: HomeComponent },
	{  path: 'basic',      component: BasicComponent },
	{  path: 'intermediate',      component: IntermediateComponent },
	{  path: 'advanced',      component: AdvancedComponent },

	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
