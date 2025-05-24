import React, { useState } from "react";

export default function DisplayWeather(data) {
  const weatherData = data.data;

  if (!data?.data) return <p>Enter a city!</p>;

  return (
    <>
      <h1>City: {weatherData.name}</h1>
      <p>
        Current Temp: {weatherData.main.temp}°F
        <br />
        Feels like: {weatherData.main.feels_like}°F
        <br />
        High Temp: {weatherData.main.temp_max}°F
        <br />
        Low Temp: {weatherData.main.temp_min}°F
        <br />
        Humidity: {weatherData.main.humidity}%
      </p>
    </>
  );
}
