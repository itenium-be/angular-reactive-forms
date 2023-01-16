import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { TemplateComponent } from './0-template/template.component';
import { BasicComponent } from './1-basic/basic.component';
import { FormBuilderComponent } from './2-form-builder/form-builder.component';
import { FormArrayEasyComponent } from './3a-easy-form-array/form-array-easy.component';
import { FormArrayComplexComponent } from './3b-complex-form-array/form-array-complex.component';
import { FormTestingComponent } from './4-form-testing/form-testing.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-array-easy', component: FormArrayEasyComponent },
  { path: 'form-array-complex', component: FormArrayComplexComponent },
  { path: 'form-testing/:id', component: FormTestingComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
