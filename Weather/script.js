const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '45054a3f65msh97e1f2d2bd2f1ebp12f06bjsn01d87ba0c7ba',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));