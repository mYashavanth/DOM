let inputElement = document.getElementById("searchInput")
let search = document.getElementById("searchBtn")
let bodyCont = document.getElementById("bodyCont")
let forcast = document.getElementById("forcast")
let forcastCont = document.getElementById("forcastCont")

let apiKey = "8375da18ced7bfcfc8915dba789866c2"

search.addEventListener("click",displayData)
forcast.addEventListener("click",forcastdisplay)

async function displayData(){
    try {
        let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputElement.value}&limit=1&appid=${apiKey}&units=metric`);
        let data = await res.json();
        let lat = data[0].lat;
        let lon = data[0].lon;
        let cityRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        let cityData = await cityRes.json();
        console.log(cityData)
        display(cityData);
    } catch (error) {
        console.log(error)
        alert ("Enter A Valied Place Name")
    }
}

function display(data){
    let date = dateTime(data.dt)
    let cityName = data.name;
    let country = data.sys.country;
    let temp = data.main.temp;
    let feels = data.main.feels_like;
    let discription = data.weather[0].description;
    let main = data.weather[0].main;
    let id = data.weather[0].id;
    let windSpeed = data.wind.speed;
    let windDirection = direction(data.wind.deg)
    let humidity = data.main.humidity;
    let dewPoint = data.main.temp_min;
    let hPa = data.main.pressure;
    let UV = 4;
    let visibility = data.visibility;
    let sunrise = dateTime(data.sys.sunrise)
    let sunset = dateTime(data.sys.sunset)

    bodyCont.innerHTML = `
        <div id="data">
            <div id="city">
                <p style="margin-bottom: -25px; color:#EE8060">${date}</p>
                <h1>${cityName},${country} </h1>
            </div>
            <div id="temp">
                <img src="${findSrc(id)}" alt="image">
                <h1>${temp}&#8451</h1>
            </div>
            <div id="weather">
                <h3> Feels like ${feels}&#8451, ${discription}, ${main} </h3>
            </div>
            <div id="weatherData">
                <div id="column1">
                    <p>Wind Speed: ${windSpeed} ${windDirection} </p>
                    <p>Humidity: ${humidity}% </p>
                    <p>Dew point: ${dewPoint}&#8451</p>
                    <p>Sunrise: ${sunrise}</p>
                </div>
                <div id="column2">
                    <p>Atmo Pressure:${hPa}hPa</p>
                    <p> UV: ${UV}</p>
                    <p>Visibility: ${visibility}Km</p>
                    <p>Sunset: ${sunset}</p>
                </div>
            </div>

        </div>
        <div id="map">
            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,${inputElement.value}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>
            <date href="https://www.embedgooglemap.net"></date>
            <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>
        </div>
    `

}
// function to display the time in propper way
function dateTime(time){
    forcastCont.innerHTML = ""
    let amOrpm;
    let dateTime = new Date(time * 1000);
    let month = ["Jan","Feb","Mar","Apr","may","Jun","Jul","Aug","Sep","Oct","Now","Dec"];
    let hour;
    let date;
    let min;
    if(dateTime.getHours()%12<10){
        hour = `0${dateTime.getHours()%12}`;
    }else{
        hour = `${dateTime.getHours()%12}`;
    }
    if(dateTime.getDate()<10){
        date = `0${dateTime.getDate()}`;
    }else{
        date = `${dateTime.getDate()}`;
    }
    if(dateTime.getMinutes()<10){
        min = `0${dateTime.getMinutes()}`;
    }else{
        min = `${dateTime.getMinutes()}`;
    }
    if(dateTime.getHours()>12){
        amOrpm = "PM";
    }else{
        amOrpm = "AM";
    }
    return (`${month[dateTime.getMonth()]} ${date}, ${hour}:${min} ${amOrpm}`)
}
// function To convert deg to direction
function direction(deg) {
    let directions = ['Northerly', 'North Easterly', 'Easterly', 'South Easterly', 'Southerly', 'South Westerly', 'Westerly', 'North Westerly'];

    deg += 22.5;

    if (deg < 0)
        deg = 360 - Math.abs(deg) % 360;
    else
        deg = deg % 360;

    let w = parseInt(deg / 45);
    return directions[w];
}
// function for img source of weather data (id= weather data id)
function findSrc(id){
    //    console.log(datNight)
    //    console.log(id)
    let datNight;
    if(id==200||id==201||id==202||id==210||id==211||id==212||id==221||id==230||id==231||id==232){
    return 'https://openweathermap.org/img/wn/11d@2x.png'
    }else if(id==300||id==301||id==302||id==310||id==311||id==312||id==313||id==314||id==321||id==520||id==521||id==531||id==522){
    return 'https://openweathermap.org/img/wn/09d@2x.png'
    }else if(id==500||id==501||id==502||id==503||id==504){
    if(datNight=='day'){
                    return 'https://openweathermap.org/img/wn/10d@2x.png'
                    }else{
                    return 'https://openweathermap.org/img/wn/10n@2x.png'
                    }
    }else if(id==511||id==600||id==601||id==602||id==611||id==612||id==613||id==615||id==616||id==620||id==621||id==622){
    return 'https://openweathermap.org/img/wn/13d@2x.png'
    }else if(id==701||id==711||id==721||id==731||id==741||id==751||id==761||id==762||id==771||id==781){
    return 'https://openweathermap.org/img/wn/50d@2x.png'
    }else if(id==800){
                    if(datNight=='day'){
                    return 'https://openweathermap.org/img/wn/01d@2x.png'
                    }else{
                    return 'https://openweathermap.org/img/wn/01n@2x.png'
                    }
    
    }else if(id==801){
    if(datNight=='day'){
                    return 'https://openweathermap.org/img/wn/02d@2x.png'
                    }else{
                    return 'https://openweathermap.org/img/wn/02n@2x.png'
                    }
    }else if(id==802){
    return 'https://openweathermap.org/img/wn/03d@2x.png'
    }
    
    else if(id==803){
    return 'https://openweathermap.org/img/wn/04d@2x.png'
    }else if(id==804){
    return 'https://openweathermap.org/img/wn/04d@2x.png'
    }   
}


// Code for Weather II assignment;
async function forcastdisplay(){
    try {
        let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputElement.value}&limit=1&appid=${apiKey}&units=metric`);
        let data = await res.json();
        let lat = data[0].lat;
        let lon = data[0].lon;
        let forcastRes = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        let forcastData = await forcastRes.json();
        console.log(forcastData)
        displayForcast(forcastData);
    } catch (error) {
        console.log(error)
    }
}
// To convert the 40 object to actual data we need in object
function displayForcast(ele){
    let arr = ele.list
    let obj = {}
    arr.forEach((ele)=>{
        let date = new Date(ele.dt*1000).getDate();
        let id = ele.weather[0].id;
        let maxTemp = ele.main.temp_max;
        let dateTime = ele.main.temp_min;
        let day = new Date(ele.dt*1000).getDay();
        console.log(date,id,maxTemp,dateTime)
        if(obj[date]==undefined){
            obj[date] = {
                date: date,
                weatherId: [id],
                maxTemp: maxTemp,
                dateTime: dateTime,
                day: day
            }
        }else{
            if(obj[date].maxTemp<maxTemp){
                obj[date].maxTemp = maxTemp;
            }
            if(obj[date].dateTime>dateTime){
                obj[date].dateTime = dateTime;
            }
            obj[date].weatherId.push(id)
        }
    })
    console.log(obj);
    displayInCard(obj)
}
// Display data in card
function displayInCard(data){
    // console.log(data)
    forcastCont.innerHTML = "";
    for(let ele in data){
        console.log(data[ele])
        let arr = data[ele].weatherId;
        let max = 0;
        let count = 0;
        let item;
        // for loop to get a single Id which is appeared max time
        for(let i=0; i<arr.length; i++){
            for(let j=i; j<arr.length; j++){
                if(arr[i]==arr[j]){
                    count++
                }
                if(max<count){
                    max = count;
                    item = arr[i]
                }
            }
            count = 0;
        }
        console.log(item,data[ele].maxTemp,data[ele].dateTime,data[ele].day)
        
        let days = ["Son","Mon","Tue","Wed","Thu","Fri","Sat"]

        forcastCont.innerHTML += `
        <div class="card">
            <h5>${days[data[ele].day]}</h5>
            <img src="${findSrc(item)}" alt="img">
            <h4>${data[ele].maxTemp}&#xb0</h4>
            <h4>${data[ele].dateTime}&#xb0</h4>
        </div>
        `        
    }

}
