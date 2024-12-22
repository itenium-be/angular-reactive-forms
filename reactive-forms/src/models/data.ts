export const Countries = [
  'Belgium',
  'Netherlands',
  'Germany',
  'France',
] as const;


export type CountryType = typeof Countries[number] | ''

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
