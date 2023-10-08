let apiKey = "bdb533ec"

let back = document.querySelector("#back")
back.addEventListener("click",function(){
    location.href = "index.html"
})

function detailData(){
    let imdbID = localStorage.getItem("imdbID");
    console.log(imdbID);
    fetch(`https://omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res)
        displayDetail(res)
    })
    .catch(function(err){
        console.log(err)
    })
}

function displayDetail(data){
    document.querySelector("#cont").innerHTML = ""
    let dataCard = document.createElement("div")
    dataCard.className = "card"

    let posterElement = document.createElement("img")
    posterElement.src = data.Poster

    let titleElement = document.createElement("p")
    titleElement.textContent = "Title  : " + data.Title

    let yearElement = document.createElement("p")
    yearElement.textContent = "Year : " + data.Year

    let ratedElement = document.createElement("p")
    ratedElement.textContent = "Rated : " + data.Rated

    let releasedElement = document.createElement("p")
    releasedElement.textContent = "Released : " + data.Released

    let runtimeElement = document.createElement("p")
    runtimeElement.textContent = "Runtime : " + data.Runtime

    let genreElement = document.createElement("p")
    genreElement.textContent = "Genre : " + data.Genre

    let directorElement = document.createElement("p")
    directorElement.textContent = "Director : " + data.Director

    let writerElement = document.createElement("p")
    writerElement.textContent = "Writer : " + data.Writer

    let plotElement = document.createElement("p")
    plotElement.textContent = "Plot : " + data.Plot

    let languageElement = document.createElement("p")
    languageElement.textContent = "Language : " + data.Language

    let countryElement = document.createElement("p")
    countryElement.textContent = "Country : " + data.Country

    let awardsElement = document.createElement("p")
    awardsElement.textContent = "Awards : " + data.Awards

    let metascoreElement = document.createElement("p")
    metascoreElement.textContent = "Metascore : " + data.Metascore

    let imdbRatingElement = document.createElement("p")
    imdbRatingElement.textContent = "IMDB Rating : " + data.imdbRating

    let imdbVotesElement = document.createElement("p")
    imdbVotesElement.textContent = "IMDB Votes : " + data.imdbVotes

    let typeElement = document.createElement("p")
    typeElement.textContent = "Type : " + data.Type

    let DVDElement = document.createElement("div")
    DVDElement.textContent = "DVD : " + data.DVD

    let boxOfficeElement = document.createElement("p")
    boxOfficeElement.textContent = "Box Office  : " + data.BoxOffice

    let productionElement = document.createElement("p")
    productionElement.textContent = "Production : " + data.Production

    let websiteElement = document.createElement("p")
    websiteElement.textContent = "Website : " + data.Website

    let responseElement = document.createElement("p")
    responseElement.textContent = "Response : " + data.Response


    dataCard.append(
        posterElement,
        titleElement,
        yearElement,
        ratedElement,
        releasedElement,
        runtimeElement,
        genreElement,
        directorElement,
        writerElement,
        plotElement,
        languageElement,
        countryElement,
        awardsElement,
        metascoreElement,
        imdbRatingElement,
        imdbVotesElement,
        typeElement,
        DVDElement,
        boxOfficeElement,
        productionElement,
        websiteElement,
        responseElement
    )

    document.querySelector("#cont").append(dataCard)
}


detailData()
