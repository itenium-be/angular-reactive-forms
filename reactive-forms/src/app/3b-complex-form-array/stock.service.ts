import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const Colors = ['Red', 'Green', 'Yellow', 'Blue'] as const;

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never

export type ColorsType = ElementType<typeof Colors>

const stock: Record<ColorsType, number> = {
  Red: 5,
  Green: 2,
  Yellow: 9,
  Blue: 0,
}

@Injectable({ providedIn: 'root' })
export class StockService {
  getStock(color: ColorsType): Observable<number> {
    const colorStock = stock[color];
    return of(colorStock || 0);
  }
}
