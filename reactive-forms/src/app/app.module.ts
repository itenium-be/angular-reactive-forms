import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './0-template/template.component';
import { BasicComponent } from './1-basic/basic.component';
import { FormBuilderComponent } from './2-form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TemplateComponent,
    BasicComponent,
    FormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Template-Driven Forms
    FormsModule,

    // Reactive Forms
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
