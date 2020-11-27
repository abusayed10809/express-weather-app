const submitButton = document.getElementById('submitButton');

const getInfo = (event) => {
    event.preventDefault();
    let url = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};
    alert('hello');
}

submitButton.addEventListener('click', getInfo);