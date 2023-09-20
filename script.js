const apikey = '25aacc07108f8f790cae56f31f7cfc83';
const tempreture = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const userinput = document.getElementById('search');
const searchbtn = document.getElementById('searchbtn');
const locationname = document.getElementById('locationName');

searchbtn.addEventListener('click', () =>{
    const location = userinput.value.trim();
    console.log(location)
    if(location){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            locationname.textContent = data.name;
            tempreture.textContent = `${data.main.temp}°C`;
            humidity.textContent = `${data.main.humidity}%`;
            windspeed.textContent = `${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error("error fetching weather data", error);
            locationname.textContent = "";
            humidity.textContent = "";
            tempreture.textContent = "";
            windspeed.textContent = "";
        })
    }
})