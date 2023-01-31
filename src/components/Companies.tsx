import React from "react";
import { Select } from "@chakra-ui/react";
import { ICompany } from "../types";

function Companies({
  companies,
  setSelectedCompany,
}: {
  companies: ICompany[];
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <Select placeholder='Select Company' onChange={(e) => setSelectedCompany(e.target.value)}>
      {companies.map((selectedCompany: ICompany) => (
        <option
          color="green"
          key={selectedCompany.id}
          value={selectedCompany.name}
        >
          {selectedCompany.name}
        </option>
      ))}
    </Select>
  );
}

export default Companies;
