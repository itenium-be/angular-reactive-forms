export const Countries = [
  'Belgium',
  'Netherlands',
  'Germany',
  'France',
] as const;

type ElementType <T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never

export type CountryType = ElementType<typeof Countries> | ''

// export enum Countries {
//   Belgium,
//   Netherlands,
//   Germany,
//   France,
// }


// export const CountryCities = {
//   Belgium: ['Brussel', 'Antwerpen', 'Gent', 'Mechelen', 'Brugge'],
//   Netherlands: ['Rotterdam', 'Amsterdam', 'Den Haag'],
//   Germany: ['Berlin', 'Munich', 'Hamburg', 'Nuremberg'],
//   France: ['Paris', 'Toulouse', 'Nice', 'Lyon', 'Lille', 'Bordeaux']
// };
