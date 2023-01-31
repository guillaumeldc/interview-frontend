import React from "react";
import { Select, Flex, Text } from "@chakra-ui/react";
import { ICountry } from "../types";

function Countries({
  countries,
  setSelectedCountry,
}: {
  countries: ICountry[];
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <Select placeholder='Select Country' onChange={(e) => setSelectedCountry(e.target.value)}>
      {countries.map((selectedCountry: ICountry) => (
        <option
          color="green"
          key={selectedCountry.id}
          value={selectedCountry.name}
        >
          {selectedCountry.name}
        </option>
      ))}
    </Select>
  );
}

export default Countries;
