// fill in javascript code here
let eName = document.querySelector("#name");
let eId = document.querySelector("#employeeID");
let eDep = document.querySelector("#department");
let eExp = document.querySelector("#exp");
let eEmail = document.querySelector("#email");
let eMob = document.querySelector("#mbl");
let filter = document.querySelector("#filter");

document.querySelector("form").addEventListener("submit",myForm);
let arrData = [];
function myForm(ele){
    ele.preventDefault();
    // console.log(eName,eId,eDep,eExp,eEmail,eMob)
    let data = {
        eName: eName.value,
        eId: eId.value,
        eDep: eDep.value,
        eExp: eExp.value,
        eEmail: eEmail.value,
        eMob:eMob.value
    }
    arrData.push(data);
    mapping(arrData);
}

function mapping(Data){
    document.querySelector("tbody").innerHTML = "";
    Data.map((ele,index)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let btn = document.createElement("button")
        
        td8.append(btn)
        btn.innerText="Delete";
        btn.style.backgroundColor = "red";
        btn.style.border = "0px";
        btn.style.borderRadius = "10px";
        btn.style.color = "white"
        btn.style.width = "80px"
        btn.style.height = "30px"
        
        btn.addEventListener("click",function(){
            Data.splice(index,1);
            mapping(Data)
            if(Data==arr){
                arrData = arr.concat(arr1);
            }
        })
    
        td1.innerText = ele.eName;
        td2.innerText = ele.eId;
        td3.innerText = ele.eDep;
        td4.innerText = ele.eExp;
        td5.innerText = ele.eEmail;
        td6.innerText = ele.eMob;
        
        if(td4.innerText>=0 && td4.innerText<=1){
            td7.innerText="Fresher";
        }else if(td4.innerText>=2 && td4.innerText<=5){
            td7.innerText="Junior";
        }else if(td4.innerText>5){
            td7.innerText="Senior";
        } 
    
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        document.querySelector("tbody").append(tr);
    })
}
let arr= [];
let arr1= [];
document.querySelector("#filterBut").addEventListener("click",function(){
    arr = arrData.filter((ele,index)=>{
        if(ele.eDep==filter.value){
            return ele;
        }
    })
    arr1 = arrData.filter((ele,index)=>{
        if(ele.eDep!=filter.value){
            return ele;
        }
    })
    arrData = arr.concat(arr1);
    mapping(arr);
})

