let getData = document.querySelector("#getDataBtn")
let search = document.querySelector("#searchBtn")
let searchData = document.querySelector("#search")
let sort = document.querySelector("#sortBtn")
let sortData = document.querySelector("#sort")
let flag;

getData.addEventListener("click",totalData)
search.addEventListener("click",categoryData)
sort.addEventListener("click",order)

async function totalData(){
    try {
        let actualdata = await fetch("https://fakestoreapi.com/products")
        let data = await actualdata.json();
        // console.log(data)
        displayData(data)
        flag = true;
    } catch (error) {
        console.log(error)
    }
}
async function categoryData(){
    // console.log(!searchData.value)
    try {
        if(!searchData.value){
            alert ("Select The Category")
        }else{
            let actualdata = await fetch(`https://fakestoreapi.com/products/category/${searchData.value}`)
            let data = await actualdata.json();
            // console.log(data)
            displayData(data)
            flag = true;
        }
    } catch (error) {
        console.log(error)
    }
}
async function order(){
    
    if(!flag){
        console.log("No Data Is Available")
    }else{
        try {
            if(!searchData.value){
                let actualdata = await fetch(`https://fakestoreapi.com/products?sort=${sortData.value}`)
                let data = await actualdata.json();
                // console.log(data)
                displayData(data)
            }else if(sortData.value){
                let actualdata = await fetch(`https://fakestoreapi.com/products/category/${searchData.value}?sort=${sortData.value}`)
                let data = await actualdata.json();
                // console.log(data)
                displayData(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
function displayData(data){
    document.querySelector("#display").innerHTML=null;
    data.forEach(({id,title,price,description,category,image,rating}) => {
        // console.log(id,title,price,description,category,image,rating)
        let div = document.createElement("div")
        div.className = "card"

        let img = document.createElement("img")
        img.src= image;

        let Title = document.createElement("h1")
        Title.textContent = title;

        let Price = document.createElement("h3")
        Price.textContent = `Price: ${price} Rs`;

        let Description = document.createElement("p")
        Description.textContent = description;

        let Category = document.createElement("h4")
        Category.textContent = `Category: ${category}`;

        let Rating = document.createElement("p")
        Rating.textContent = `Total Rating ${rating.rate} of 5`

        let count = document.createElement("p")
        count.textContent = `Number of peoples Rated: ${rating.count}`

        div.append(
            img,
            Title,
            Price,
            Description,
            Category,
            Rating,
            count
        )
        document.querySelector("#display").appendChild(div)
    });
}