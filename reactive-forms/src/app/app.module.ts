import { NgModule } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './0-template/template.component';
import { BasicComponent } from './1-basic/basic.component';
import { FormBuilderComponent } from './2-form-builder/form-builder.component';
import { FormArrayEasyComponent } from './3a-easy-form-array/form-array-easy.component';
import { FormArrayComplexComponent } from './3b-complex-form-array/form-array-complex.component';
import { StockService } from './3b-complex-form-array/stock.service';
import { FormTestingComponent } from './4-form-testing/form-testing.component';
import { PersonService } from '../models/person.service';
import { LanguageSelectComponent } from './5-ControlValueAccessor/LanguageSelect';
import { LanguageService } from './5-ControlValueAccessor/LanguageService';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    TemplateComponent,
    BasicComponent,
    FormBuilderComponent,
    FormArrayEasyComponent,
    FormArrayComplexComponent,
    FormTestingComponent,
    LanguageSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    // Template-Driven Forms
    FormsModule,

    // Reactive Forms
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    PersonService,
    StockService,
    LanguageService,
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {}
