let btn = document.querySelector("#btn");
let town = document.querySelector("#town");
let city = document.getElementById("city");
let temp = document.querySelector("#temp");
let status = document.querySelector("#status");
let wind= document.querySelector("#wind")
let humidity= document.querySelector("#humidity")
let day = document.getElementById("day");
const middlelayer = document.querySelector(".middlelayer");
const bottomlayer=document.querySelector(".bottomlayer")
const d = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
day.innerText = weekday[d.getDay()];

let date = document.querySelector("#date").textContent = new Date().getDate() +" " + month[d.getMonth()];
btn.addEventListener("click", async (event) => {
    
    event.preventDefault();
   
   
    let cityName = city.value;
    middlelayer.classList.add("data-hide");
    bottomlayer.classList.add("data-hide");

    if (cityName === "") {
        town.textContent = "Please enter your city name";
        document.getElementById("myForm").reset();
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8cea84ee55f680b67d918bb787119b06`;
            const response = await fetch(url);
            const data = await response.json();
            const array = [data];
            const currentTemp=array[0].main.temp;
            temp.innerHTML = `<p>${(currentTemp-273.15).toFixed(2)}<sup>o</sup>C </p>`;
            let temp_status = array[0].weather[0].main;
            town.textContent = array[0].name + " | " + array[0].sys.country;
            wind.innerHTML=`<p>Wind Speed:${array[0].wind.speed}`
            humidity.innerHTML=`<p>Humidity:${array[0].main.humidity}`
            let weatherCondition = document.getElementById("weather-con");

            if (temp_status == "Clear") {
                status.innerHTML = ` <i class="fas fa-sun" style="color: #eccc68"></i>`;
            } else if (temp_status == "Clouds") {
                status.innerHTML = ` <i class="fas fa-cloud" style="color: #f1f2f6"></i>`;
            } else if (temp_status == "Rain") {
                status.innerHTML = ` <i class="fas fa-cloud-rain" style="color: #a4b0be"></i>`;
            } else if (temp_status == "Smoke") {
                status.innerHTML = `<i class="fas fa-smog" style="color: #eccc68"></i>`
            }
            else if (temp_status == "Haze") {
                status.innerHTML = `<i class="fas fa-smog" style="color: #eccc68"></i>`
            }
            else {
                status.innerHTML = ` <i class="fas fa-sun" style="color: #eccc68"></i>`;
            }
            middlelayer.classList.remove("data-hide");
            bottomlayer.classList.remove("data-hide");
        }
        catch{
            town.textContent = `City details not available, sorry for the Inconvenience`;
        }
    }
})