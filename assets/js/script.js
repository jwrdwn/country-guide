let searchBtn = document.getElementById('search-button')
let countryInput = document.getElementById('country-input')
let result = document.getElementsByClassName('result')[0]

searchBtn.addEventListener('click', () => {
    let countryName = countryInput.value
    let modifiedURL = `https://restcountries.com/v3.1/name/${countryName}`

    fetch(modifiedURL).then((response) => response.json())
    .then((data) => {
        console.log(data[0])
        result.innerHTML = `
            <div class="flags">
                <img src="${data[0].flags.svg}" class="flag-img">
                <img src="${data[0].coatOfArms.png}" class="coat-of-arms-img">
            </div>
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent: </h4><span> ${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital: </h4><span> ${data[0].capital[0]}</span>
                </div>
                <div class="data-wrapper">
                    <h4>Common languages: </h4><span> ${Object.values(data[0].languages).toString().split(',').join(', ')}</span>
                </div>
                <div class="data-wrapper">
                    <h4>Population: </h4><span> ${data[0].population.toLocaleString("en-US")}</span>
                </div>
                <div class="data-wrapper">
                    <h4>Currency: </h4><span> ${data[0].currencies[Object.keys(data[0].currencies)].name} (${data[0].currencies[Object.keys(data[0].currencies)].symbol}) - ${Object.keys(data[0].currencies)}</span>
                </div>
            </div>
        `
    })
    .catch(() => {
        if(countryName.length == 0) {
            result.innerHTML = `<h3>The input field cannot be empty!</h3>`
        } else {
            result.innerHTML = `<h3>Please enter a valid country name!</h3>`
        }
    })
})