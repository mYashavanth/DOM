let apiKey = "bdb533ec"
let btn = document.querySelector("#btn")

btn.addEventListener("click",display);

function display(){
    let searchData = document.querySelector("#search").value;
    console.log("hi",searchData,apiKey)
    fetch(`https://omdbapi.com/?apikey=${apiKey}&s=${searchData}`)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res.Search)
        displayData(res.Search)
    })
    .catch(function(err){
        console.log(err);
    })
}

function displayData(data){
    document.querySelector("#cont").innerHTML="";
    if(data){
        data.forEach(function(ele){
            // let img = document.createElement("img");
            // img.src = ele.Poster;
    
            // let title = document.createElement("h2");
            // title.innerText = `Title: ${ele.Title}`;
            
            // let imdbID = document.createElement("h4");
            // imdbID.innerText = `imdbID: ${ele.imdbID}`;
            
            // let type = document.createElement("h4");
            // type.innerText = `Type: ${ele.Type}`;
    
            // let year = document.createElement("p");
            // year.innerText = `Year: ${ele.Year}`;
    
            // let div = document.createElement("div");
            // div.className = "card"
    
            // div.append(img,title,imdbID,type,year)
            // document.querySelector("#cont").append(div);

            // div.addEventListener("click",function(){
            //     localStorage.setItem("imdbID",ele.imdbID);
            //     location.href = "index2.html"
            // })
            document.querySelector("#cont").innerHTML += 
            `<div class="card">
            <img src="${ele.Poster}" alt="">
            <h2>${ele.Title}</h2>
            <h4>${ele.imdbID}</h4>
            <h4>${ele.Type}</h4>
            <p>${ele.Year}</p>
            </div>`
        })
    }else{
        let title = document.createElement("h2");
        title.innerText = "No Result Found"
        document.querySelector("#cont").append(title);

    }
}