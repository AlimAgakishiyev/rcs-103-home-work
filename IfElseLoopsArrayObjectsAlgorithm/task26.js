let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

function findCountriesStartingAndEndingWithA(arr) {
    let result = arr.filter(country => {
        return country.startsWith('A') && country.endsWith('a');
    });
    return result;
}

let filteredCountries = findCountriesStartingAndEndingWithA(countries);
console.log(filteredCountries);
