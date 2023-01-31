import React, { useEffect, useMemo, useState } from "react";
import * as API from "../api";
import { ICompany } from "../types";

function useGetCompanies(): {
  selectedCompany: string;
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  companies: ICompany[];
} {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [companies, setCompanies] = useState<ICompany[]>([]);

  // Resets selectedCompany whenever country is switched
  useEffect(() => {
    setSelectedCompany("");
  }, [selectedCountry]);

  // Filters querys companies based on country
  useEffect(() => {
    if (!selectedCountry) {
      return;
    }
    const fetch = async () => {
      try {
        const res = await API.getCompanies({
          city__country__name: selectedCountry,
        });
        const json = await res?.json();
        setCompanies(json);
      } catch (e) {
        console.error("e", e);
      }
    };
    fetch();
  }, [selectedCountry]);

  return {
    selectedCountry,
    selectedCompany,
    setSelectedCompany,
    setSelectedCountry,
    companies,
  };
}

export default useGetCompanies;
