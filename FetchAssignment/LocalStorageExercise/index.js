document.querySelector("button").addEventListener("click",myFun);
function myFun(){
    fetch("https://reqres.in/api/users?page=2")
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            console.log(res.data);
            display(res.data)
        })
        .catch(function(err){
            console.log(err);
        })

        function display(data){
            data.forEach(function(ele){
                let img = document.createElement("img")
                img.src = ele.avatar;
                
                let name = document.createElement("h3");
                name.innerText = `${ele.first_name} ${ele.last_name}`;
    
                let mail = document.createElement("p");
                mail.innerText = ele.email;
    
                let div = document.createElement("div");
                div.className = "card"
                div.append(img,name,mail)
    
                document.querySelector("#cont").appendChild(div);
            })
        }
}