let uName = document.getElementById("name")
let uAge = document.getElementById("age")

document.querySelector("form").addEventListener("submit",mySubmit)
function mySubmit(ele){
    ele.preventDefault()
    console.log(uName.value)
    console.log(uAge.value)
    if(uName.value && uAge.value){
        localStorage.setItem("name",uName.value)
        localStorage.setItem("age",uAge.value)
        uName.value = null;
        uAge.value = null;
    }else{
        alert(`Given Data is Incomplete`)
        uName.value = null;
        uAge.value = null;
    }
}
document.querySelector("button").addEventListener("click",function(){
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td1.innerText = localStorage.getItem("name")
    td2.innerText = localStorage.getItem("age")
    tr.append(td1,td2)
    document.querySelector("tbody").innerHTML = "";
    document.querySelector("tbody").append(tr)
})