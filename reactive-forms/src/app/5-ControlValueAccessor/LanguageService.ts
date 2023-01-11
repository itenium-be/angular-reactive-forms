import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum Language {
  Dutch = 'nl',
  English = 'en',
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang$: Subject<Language> = new Subject();
}
