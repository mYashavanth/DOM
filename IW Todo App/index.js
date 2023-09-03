let task = document.querySelector("#task");
let priority = document.querySelector("#priority");
document.querySelector("form").addEventListener("submit",myform);
let arrData = [];

function myform(e){
    e.preventDefault();
    let data = {
        task: task.value,
        priority: priority.value
    }
    arrData.push(data)
    document.querySelector("tbody").innerHTML = "";
    
    arrData.map((ele)=>{
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        td1.innerText = ele.task;
        td2.innerText = ele.priority;
        if(td2.innerText=="Low"){
            td3.style.backgroundColor = "green"
            td3.style.color = "white"
            td3.innerText = "L"
        }else if(td2.innerText=="High"){
            td3.style.backgroundColor = "red"
            td3.innerText = "H"
            td3.style.color = "white"
        }
        tr.append(td1,td2,td3)
        document.querySelector("tbody").append(tr)
    })
}
