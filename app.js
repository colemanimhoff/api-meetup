const getUrl = 'https://api.punkapi.com/v2/beers/?page=1&per_page=80'

getData(getUrl)

function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(beers => createBeerCard(beers))
        .then(beers => flipCard(beers))
}

function createBeerCard(beers) {
    const beerContainer = document.querySelector('main')
    return beers.forEach(beer => {
        beerContainer.innerHTML += (`
                <div class="beer-card">
                    <div class="front">
                        <h2>${beer.name}</h2>
                        <img src=${beer.image_url}></img>
                        <p>${beer.tagline}</p>
                    </div>
                    <div class="back">
                        <h3>First Brewed</h3>
                        <p>${beer.first_brewed}</p>
                        <h3>ABV</h3>
                        <p>${beer.abv}%</p>
                        <h3>Food Pairing</h3>
                        <p>${beer.food_pairing[0]}</p>
                    </div>
                </div>
        `)
        return beerContainer
    })
}

function flipCard() {
    const beerCards = document.querySelectorAll('.beer-card')
    beerCards.forEach(beer => {
        beer.addEventListener('click', (() => {
            beer.classList.toggle('clicked')
            beer.firstElementChild.nextElementSibling.classList.toggle('flipped')
        }))
    })
}
