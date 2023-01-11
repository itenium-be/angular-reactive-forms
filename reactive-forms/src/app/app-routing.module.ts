import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './navbar/page-not-found.component';
import { TemplateComponent } from './0-template/template.component';
import { BasicComponent } from './1-basic/basic.component';
import { FormBuilderComponent } from './2-form-builder/form-builder.component';
import { FormArrayComponent } from './3-form-array/form-array.component';
import { FormTestingComponent } from './4-form-testing/form-testing.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'form-testing/:id', component: FormTestingComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
