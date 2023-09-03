// fill in javascript code here
let dName = document.querySelector("#name");
let dId = document.querySelector("#docID");
let dSpe = document.querySelector("#dept");
let dExp = document.querySelector("#exp");
let dEmail = document.querySelector("#email");
let dMob = document.querySelector("#mbl");

document.querySelector("form").addEventListener("submit",myForm);

let arrData = [];
function myForm(ele){
    ele.preventDefault();
    let data = {
        dName: dName.value,
        dId: dId.value,
        dSpe: dSpe.value,
        dExp: dExp.value,
        dEmail: dEmail.value,
        dMob: dMob.value
    }
    arrData.push(data);
    mapping();
}
function mapping(){
    document.querySelector("tbody").innerHTML = "";
    arrData.map((ele,index)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");

        let btn = document.createElement("button");
        btn.setAttribute("id","btn");
        btn.innerText="Delete"

        btn.addEventListener("click",function(){
            arrData.splice(index,1)
            mapping()
        })


        td1.innerText = ele.dName;
        td2.innerText = ele.dId;
        td3.innerText = ele.dSpe;
        td4.innerText = ele.dExp;
        td5.innerText = ele.dEmail;
        td6.innerText = ele.dMob;

        if(td4.innerText>5){
            td7.innerText = "Senior";
        }else if(td4.innerText>=2 && td4.innerText<=5){
            td7.innerText = "Junior";
        }else if(td4.innerText<=1){
            td7.innerText = "Trainee";
        }
        
        td8.append(btn)
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        document.querySelector("tbody").append(tr);

    })
}

