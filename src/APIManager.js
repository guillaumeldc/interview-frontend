const baseUrl = "http://interview.enhdi.com:8000/"

const username = "candidate"
const password = "YouCanDoIt!"

const auth = 'Basic ' + btoa(username + ":" + password)

export const getContries = async () => {
    let url = baseUrl + "api/countries"
console.log(url)
    let data = await fetch(url, {
        method:"GET", 
        headers: {
            Authorization:auth
        }
    });
    let json = data.json()

    return json
}

export const getCompanies = async () => {
    let url = baseUrl + "api/companies/"
console.log(url)
    let data = await fetch(url, {
        method:"GET", 
        headers: {
            Authorization:auth
        }
    });
    let json = data.json()

    return json
}