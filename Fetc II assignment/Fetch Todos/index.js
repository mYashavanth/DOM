let tbody = document.querySelector("tbody")

async function fetchData(){
    document.querySelector("button").style.display = "none"
    try {
        let todoDataElement = await fetch("https://jsonplaceholder.typicode.com/todos")
        let todoData = await todoDataElement.json();
        // console.log(todoData)
        display(todoData)
    } catch (error) {
        console.log(error)
    }
}
function display(data){
    data.map(({id,title,completed}) => {
        // console.log(id,title,completed)
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")

        td1.textContent = id;
        td2.textContent = title;
        td3.textContent = completed;

        tr.append(td1,td2,td3)
        tbody.appendChild(tr)
    });
}