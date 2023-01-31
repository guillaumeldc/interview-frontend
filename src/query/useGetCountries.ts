import { useQuery } from "react-query";
import * as API from "../api";
import { GET_COUNTRIES } from "../queryTypes";

export function useGetCountries() {
  const queryData = useQuery(
    GET_COUNTRIES,
    () =>
      API.getCountries()
        .then((res) => res?.json())
        .then((data) => data),
    {
      initialData: [],
    }
  );
  return queryData;
}
