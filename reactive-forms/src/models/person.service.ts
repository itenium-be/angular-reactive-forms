import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PersonModel } from "./models";

@Injectable({ providedIn: 'root' })
export class PersonService {
  getPerson(id: number): Observable<PersonModel> {
    return of({
      name: 'Koen Koenen',
      inss: '',
      birthDate: new Date('1980-05-09'),
      eula: true,
      language: '',
      address: {
        street: 'Brusselsesteenweg 200',
        city: '9400 Ninove',
      },
      business: {
        active: false,
        name: '',
        tax: '',
        correspondence: 'Email',
      },
    });
  }
}
