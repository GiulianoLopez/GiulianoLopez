window.addEventListener('load', () => { //Luego de que la página se cargue (load), se ejecuta esta función
	let long;
	let lat;
	let temperatureDescription = document.querySelector(".temperature-description");
	let temperatureDegree = document.querySelector(".temperature-degree");
	let locationTimezone = document.querySelector(".location-timezone");
	let temperatureSection = document.querySelector(".temperature");
	const temperatureSpan = document.querySelector(".temperature span");




	if (navigator.geolocation) { //Si se obtiene navigator.geolocation, entonces...
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;


			const proxy = "https://cors-anywhere.herokuapp.com/"; //Cuando necesitamos acceder a la API con nuestro Host local.

			const api = `${proxy}https://api.darksky.net/forecast/910b177872ac949833af15108dec56e8/${lat},${long}`; //Se reemplazan los numero que estanam por las variables lat y long. 

			fetch(api) //Una vez que tengas la información...
			.then(response => {   //Luego
				return response.json();
	       })
		    .then(data => {
			const { temperature, summary, icon } = data.currently; //Para que tome los datos actuales obteniendo la ubicación.
			//Set DOM elements from the API
			temperatureDegree.textContent = temperature;
			temperatureDescription.textContent = summary;
			locationTimezone.textContent = data.timezone;
			//Formula for Celsius
			let celsius = (temperature - 32) * (5 / 9);
			//Set icon
			setIcons(icon, document.querySelector(".icon"));

			//Change temperature to Celcius/Farenheit
			temperatureSection.addEventListener("click", () => {
				if (temperatureSpan.textContent === "F") {
					temperatureSpan.textContent = "C";
					temperatureDegree.textContent = Math.floor(celsius);
				} else {
					temperatureSpan.textContent = "F";
					temperatureDegree.textContent = temperature;
				}
			});
		  });

		});
	}	

	function setIcons(icon, iconID) {
		const skycons = new Skycons({ color: "white" });
		const currentIcon = icon.replace(/-/g, "_").toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}	
});