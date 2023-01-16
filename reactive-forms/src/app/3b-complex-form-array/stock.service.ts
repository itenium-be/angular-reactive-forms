import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const Colors = ['Red', 'Green', 'Yellow', 'Blue'];
const stock: {[key: string]: number} = {
  Red: 5,
  Green: 2,
  Yellow: 9,
  Blue: 0,
}

@Injectable({ providedIn: 'root' })
export class StockService {
  getStock(color: string): Observable<number> {
    const colorStock = stock[color];
    return of(colorStock || 0);
  }
}
