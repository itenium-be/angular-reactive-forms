import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const Colors = ['Red', 'Green', 'Yellow', 'Blue'];
const stock = {
  Red: 5,
  Green: 2,
  Yellow: 9,
  Blue: 0,
}

@Injectable({ providedIn: 'root' })
export class StockService {
  getStock(color: string): Observable<number> {
    return of((stock as any)[color] || 0);
  }
}
