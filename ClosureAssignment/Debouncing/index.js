let apiKey = "bdb533ec"
let search = document.querySelector("#search")


function display(searchData){
    fetch(`https://omdbapi.com/?apikey=${apiKey}&s=${searchData}`)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res)
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
            let img = document.createElement("img");
            img.src = ele.Poster;
    
            let title = document.createElement("h2");
            title.innerText = `Title: ${ele.Title}`;
            
            let imdbID = document.createElement("h4");
            imdbID.innerText = `imdbID: ${ele.imdbID}`;
            
            let type = document.createElement("h4");
            type.innerText = `Type: ${ele.Type}`;
    
            let year = document.createElement("p");
            year.innerText = `Year: ${ele.Year}`;
    
            let div = document.createElement("div");
            div.className = "card"
    
            div.append(img,title,imdbID,type,year)
            document.querySelector("#cont").append(div);

            div.addEventListener("click",function(){
                localStorage.setItem("imdbID",ele.imdbID);
                location.href = "index2.html"
            })
        })
    }else{
        let title = document.createElement("h2");
        title.innerText = "No Result Found"
        document.querySelector("#cont").append(title);

    }
}

function outer(func,delay){
    let timer;
    function inner(query){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(query)
        },delay)
    }
    return inner;

}

let debouncing = outer(display,500)

search.addEventListener("input",()=>{
    let input = search.value;
    debouncing(input);
});