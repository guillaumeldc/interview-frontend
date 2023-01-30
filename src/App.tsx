import React, { useEffect, useState } from 'react';
import * as mainService from './services/main.service';
import logo from './logo-main.svg';
import './App.scss';

function App() {
  const [countriesList, setCountriesList] = useState<any>([]);
  const [companiesList, setCompaniesList] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');

  useEffect(() => {
    mainService.getAllCountries()
      .then(resp => setCountriesList(resp));

    // mainService.getAllCities()
    //   .then(resp => setCitiesList(resp));
  }, []);

  const handleCountrySelected = (e: any) => {
    const selectedCountryName = e.target.value;
    setSelectedCountry(selectedCountryName);
  }

  const handleOfficeSelected = (officeName: string) => {
    setSelectedOffice(officeName);
  }

  useEffect(() => {
    if (selectedCountry) {
      mainService.getAllCompanies({ city__country__name: selectedCountry })
        .then(resp => setCompaniesList(resp))
    }
  }, [selectedCountry])

  return (
    <div className="app">
      <div className="page-holder">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>

        <section>
          <div className='form-holder'>
            {selectedOffice && <fieldset>
              <h4>Welcome to {selectedOffice}!</h4>
            </fieldset>}

            <fieldset>
              <h4>Please select country</h4>
            </fieldset>

            <fieldset>
              <select onChange={handleCountrySelected}>
                {
                  countriesList.map(({ id, name }: any) =>
                    <option key={id}>{name}</option>
                  )
                }
              </select>
            </fieldset>

            {
              selectedCountry && <>
                <fieldset>
                  <h4>Now please select the company!</h4>
                </fieldset>
                <fieldset>
                  <ul>
                    {
                      companiesList.map(({ id, name }: any, i: number) =>
                        <li key={id}
                          onClick={() => handleOfficeSelected(name)}>
                          {name}
                        </li>
                      )
                    }
                  </ul>
                </fieldset>
              </>
            }
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
