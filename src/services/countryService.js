export const fetchCountries = async () => {
    const response = await fetch('https://api.first.org/data/v1/countries');
    const data = await response.json();
    return Object.values(data.data).map(country => country.country);
};
