import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'api',
  auth: {
    username: 'candidate',
    password: 'YouCanDoIt!'
  },
})
axiosInstance.interceptors.response.use((resp) => resp.data);

export const getAllCountries = (): Promise<any[]> => {
  return axiosInstance.get('countries')
}

export const getAllCities = (): Promise<any[]> => {
  return axiosInstance.get('cities')
}

type FilterProps = {city__country__name?: string, id?: number, name?: string};

export const getAllCompanies = (filters?: FilterProps): Promise<any[]> => {
  const params = new URLSearchParams(JSON.parse(JSON.stringify(filters)));
  return axiosInstance.get('companies', {params})
}