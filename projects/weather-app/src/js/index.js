const apikey = "a2005c8872d2cb794ef12a238578785f";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl= document.querySelector("form");

formEl.addEventListener("submit", (event)=>{
	event.preventDefault();
});