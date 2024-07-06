let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russia"];

function findCountriesStartingAndEndingWithA(arr) {
    let result = arr.filter(country => {
        return (country.startsWith('A') || country.startsWith('a')) && 
               (country.endsWith('A') || country.endsWith('a'));
    });
    return result;
}

let filteredCountries = findCountriesStartingAndEndingWithA(countries);
console.log(filteredCountries);