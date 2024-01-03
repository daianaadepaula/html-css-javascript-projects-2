const apikey = "a2005c8872d2cb794ef12a238578785f";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl= document.querySelector("form");

formEl.addEventListener("submit", (event)=>{
	event.preventDefault();
	const cityValue = cityInputEl.value;
	getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

		if(!response.ok){
			throw new Error("Network response was not ok")
		}

		const data = await response.json();
		console.log(data);
	} catch (error) {
		
	}
}