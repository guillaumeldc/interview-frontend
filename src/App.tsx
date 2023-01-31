import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetCountries } from "./query/useGetCountries";
import { Image, Select, Flex, Text } from "@chakra-ui/react";
import { ICompany, ICountry } from "./types";
import useGetCompanies from "./hooks/useGetCompanies";
import Companies from "./components/Companies";
import Countries from "./components/Countries";

function App(): JSX.Element {
  const { data: countries } = useGetCountries();
  const {
    companies,
    setSelectedCompany,
    setSelectedCountry,
    selectedCountry,
    selectedCompany,
  } = useGetCompanies();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Image
          src="/logotype_horizontal_1_color+gray@1.5x.svg"
          w={100}
          h={100}
          position="absolute"
          left={2}
          top={2}
        />
        <Flex flexDirection="column">
          <Text>Country: {selectedCountry}</Text>
          {selectedCompany && <Text>Welcome {selectedCompany}</Text>}
          <Countries
            countries={countries}
            setSelectedCountry={setSelectedCountry}
          />
          {!!companies.length && (
            <Companies
              companies={companies}
              setSelectedCompany={setSelectedCompany}
            />
          )}
        </Flex>
      </header>
    </div>
  );
}

export default App;
