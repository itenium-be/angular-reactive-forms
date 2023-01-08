import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './0-template/template.component';
import { BasicComponent } from './1-basic/basic.component';
import { FormBuilderComponent } from './2-form-builder/form-builder.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
