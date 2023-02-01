import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import get API functions from APi Manager
import { getContries, getCompanies } from "./APIManager"

function App() {

  const [countries, setCountries] = useState([])
  const [companies, setCompanies] = useState([])
  const [displayCompanies, setDisplayCompanies] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState("")

  useEffect(() => {
    const getCountriesData = async () => {
      let data = await getContries()

      setCountries(data)


    }
    getCountriesData()
  }, [])

  const getCompanyList = async () => {
    let data = await getCompanies()
    return data
  }

  const handleSelect = async (country) => {
    setSelectedCompany("")
    setDisplayCompanies(true)
    let data = await getCompanyList(country)
    console.log(data)
    setCompanies(data.filter(item => item.city.country.name === country.name))
    if(data?.length === 1){
      setSelectedCompany(data[0].city.country.name)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {selectedCompany ? `Welcome to ${selectedCompany}` : null}
        <select>
          {countries.map((country) => {
            return (
              <option onClick={(e) => handleSelect(country)}

                key={country.id}>{country.name}</option>
            )
          })}</select>
        {displayCompanies ? <select>
          {companies.
            map((company) => {
              return (
                <option onClick={(e) => setSelectedCompany(company.name)}

                  key={company.id}>{company.name}</option>
              )
            })}</select> : null}

      </header>
    </div>
  );
}

export default App;
