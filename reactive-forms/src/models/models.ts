export type AddressModel = {
  street: string;
  city: string;
};

export type BusinessModel = {
  active: boolean;
  name: string;
  tax: string;
  correspondence: 'Email' | 'Post';
};

export type PersonModel = {
  name: string;
  inss: string;
  birthDate: Date;
  language: string;
  address: AddressModel;
  business: BusinessModel;
};
