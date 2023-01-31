export interface ICountry {
  id: number;
  name: string;
}

export interface ICompany {
  id: number;
  name: string;
  city: ICountry;
}
