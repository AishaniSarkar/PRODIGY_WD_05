const url ="https://api.openweathermap.org/data/2.5/weather?units=metric"

const apiKey ="438333ed09a30f38940a3d0425eb64c9"
let city

const search_box= document.querySelector("input")

const btn = document.querySelector("button")

search_box.addEventListener("click",()=>{
    search_box.value=""
    search_box.placeholder="enter the city name"
})
btn.addEventListener("click",()=>{
    city = search_box.value;
    console.log(typeof city)

    fetch(url+`&q=${city}` + `&appid=${apiKey}`)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const icon= data.weather[0].main

        if (icon == "Haze") {
            document.querySelector(".icon").src="haze.png" 
        }

        else if (icon == "Clouds") {
            document.querySelector(".icon").src="cloud.png"
        }
        else if (icon == "Clear") {
            document.querySelector(".icon").src="clear.png"
        }
        else if (icon == "Rain") {
            document.querySelector(".icon").src="rain.png"
        }
        else if (icon == "Drizzle") {
            document.querySelector(".icon").src="drizzle.png"
        }
        else if (icon == "Mist") {
            document.querySelector(".icon").src="mist.jpg"
        }
        console.log(data)
    })
    .catch((error)=>{
        alert("Wrong Input")
    })


})























// Problems faced

// The fetch call is outside the btn.addEventListener callback function. This means the fetch will be executed immediately when the script runs, before the user has a chance to enter a city and click the button.