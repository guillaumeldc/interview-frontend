const SITE_URL = "http://interview.enhdi.com:8000/";
const USERNAME = "candidate";
const PASSWORD = "YouCanDoIt!";
const BASIC_AUTH = "Basic " + btoa(USERNAME + ":" + PASSWORD);

export async function getCountries() {
  try {
    return await fetch(`${SITE_URL}api/countries`, {
      method: "GET",
      headers: {
        Authorization: BASIC_AUTH,
      },
    });
  } catch (e) {
    console.error("getCountries", e);
  }
}

export async function getCities() {
  try {
    return await fetch(`${SITE_URL}api/cities`, {
      method: "GET",
      headers: {
        Authorization: BASIC_AUTH,
      },
    });
  } catch (e) {
    console.error("getCities", e);
  }
}

interface IGetCompaniesParam {
  name?: string;
  id?: string;
  city__country__name?: string;
}

export async function getCompanies(queryParams: Record<string, string>) {
  try {
    const params = new URLSearchParams(queryParams);
    return await fetch(`${SITE_URL}api/companies?${params}`, {
      method: "GET",
      headers: {
        Authorization: BASIC_AUTH,
      },
    });
  } catch (e) {
    console.error("getCities", e);
  }
}
