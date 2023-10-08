let search = document.querySelector("#input")
let select = document.querySelector("#cate")
let btn = document.getElementById("search")
let displayName = document.getElementById("foodName")
let root = document.querySelector("#root")
// to get detail data of food by giving its name
async function display(input){
    try {
        console.log(input)
        let res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${input}`)
        let data = await res.json();
        console.log(data)
        displayDetailData(data)
    } catch (error) {
        console.log(error);
    }
}
// to get food name data
async function displayCategory(){
    let input = select.value;
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${input}`)
        let data = await res.json();
        console.log(data)
        displayFoodName(data)
    } catch (error) {
        console.log(error);
    }
}
// to display food name
function displayFoodName(data){
    console.log(data.meals)
    displayName.innerHTML ="";
    data.meals.map(({strMeal,strMealThumb})=>{
        // console.log(strMeal,strMealThumb)
        displayName.innerHTML += `
        <div class="nameCard">
            <img src="${strMealThumb}" alt="">
            <h4>${strMeal}</h4>
        </div>
        `

    })
    
}
function displayDetailData(data){
    console.log(data.meals)
    root.innerHTML="";
    data.meals.map(({strMealThumb,strMeal,strArea,strCategory,strTags,idMeal,strYoutube})=>{
        root.innerHTML += `
        <div class="card">
            <div class="img">
                <img src="${strMealThumb}" alt="">
            </div>
            <div class="data">
                <h1>${strMeal}</h1>
                <h3>Area: ${strArea}</h3>
                <h3>Category: ${strCategory}</h3>
                <p>id: ${idMeal}</p>
                <p style="display: inline;">Youtube link: </p>
                <a href="${strYoutube}">Click me</a>
            </div>
        </div>
        `
    })

}

// Closure function
function throttling(func,delay){
    let timer = true;
    function inner(query){
        if(timer){
            timer = false;
            func(query);
            setTimeout(()=>{
                timer = true;
            },delay)
        } 
    }
    return inner;
}

let displayfunc = throttling(display,100)

console.log(displayfunc)

search.addEventListener("input",()=>{
    let input = search.value;
    displayfunc(input);
})

btn.addEventListener("click",displayCategory)


