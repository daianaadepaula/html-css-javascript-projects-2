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

		const temperature = Math.round(data.main.temp);
		const description = data.weather[0].description;
		const icon = data.weather[0].icon;

		const details = [
			`Sensação: ${Math.round(data.main.feels_like)}℃`,
			`Umidade: ${data.main.humidity}%`,
			`Vento: ${data.wind.speed} km/h`,
		];

		weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Ícone do Clima">`;
		weatherDataEl.querySelector(".temperature").textContent = `${temperature}℃`;
		weatherDataEl.querySelector(".description").textContent = `${description}`;

		weatherDataEl.querySelector(".details").innerHTML = details
		.map((detail) => `<div>${detail}</div>`)
		.join("");


	} catch (error) {
		weatherDataEl.querySelector(".icon").innerHTML = "";
		weatherDataEl.querySelector(".temperature").textContent = "";
		weatherDataEl.querySelector(".description").textContent = "Aconteceu um erro, por favor tente novamente mais tarde";

		weatherDataEl.querySelector(".details").innerHTML = "";
	}
}