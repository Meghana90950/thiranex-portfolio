// Replace with your actual free API key from OpenWeatherMap
const API_KEY = 'YOUR_API_KEY_HERE'; 
const BASE_URL = 'https://openweathermap.org';

// DOM Elements
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    } else {
        showError('Please enter a city name.');
    }
});

// 1. Fetch data using async/await & modern Fetch API
async function getWeatherData(city) {
    // Hide previous states
    weatherInfo.classList.add('hidden');
    errorMessage.classList.add('hidden');

    try {
        const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);

        // 2. Comprehensive error handling for failed network/HTTP responses
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling.');
            } else {
                throw new Error(`Server returned status: ${response.status}`);
            }
        }

        // Parse JSON object
        const data = await response.json();
        
        // 3. Dynamically render data to the dashboard
        renderWeather(data);

    } catch (error) {
        // Handle network errors or thrown HTTP errors
        showError(error.message || 'Failed to fetch weather data. Try again later.');
    }
}

// 4. Parse and render complex nested JSON objects
function renderWeather(data) {
    // Extracting nested values safely from the JSON response structure
    document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('weather-desc').textContent = data.weather[0].description;
    document.getElementById('temp').textContent = Math.round(data.main.temp);
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind').textContent = data.wind.speed;

    // Make the weather card visible
    weatherInfo.classList.remove('hidden');
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

