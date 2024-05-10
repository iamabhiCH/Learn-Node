/*
    You are working on a weather app. Create a JSON object representing the weather forecast for
    a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
    And display the information.    
*/

const weatherForecast = {
    "date": "2024-05-10",
    "temperature": {
      "min": 15,
      "max": 25,
      "unit": "Celsius"
    },
    "conditions": "Partly Cloudy",
    "humidity": 60
  };
  
  console.log("Weather Forecast for", weatherForecast.date);
  console.log("Temperature:", weatherForecast.temperature.min + "°C - " + weatherForecast.temperature.max + "°C");
  console.log("Conditions:", weatherForecast.conditions);
  console.log("Humidity:", weatherForecast.humidity + "%");
  
