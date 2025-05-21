import os, requests
from dotenv import load_dotenv, dotenv_values 
from flask import Flask, redirect, url_for, request, render_template
load_dotenv()

api_key = os.getenv("API_KEY")
app = Flask(__name__)

@app.route("/")
def home():
    return f"<h1>Hello Michael!</h1>"

@app.route("/testing")
def admin():
    return redirect(url_for("home"))

@app.route('/search', methods=['GET'])
def search():
    city = request.args.get('city', '')
    # Process search
    request_location = requests.get(f"http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={api_key}")

    location_data = request_location.json()
    lat = location_data[0]['lat']
    lon = location_data[0]['lon']

    request_weather = requests.get(f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&appid={api_key}")

    weather_data = request_weather.json()

    feels_like = weather_data['main']['feels_like']
    humidity = weather_data['main']['humidity']
    temp = weather_data['main']['temp']
    temp_high = weather_data['main']['temp_max']
    temp_low = weather_data['main']['temp_min']

    print(f"City: {city}")
    print(f"Feels like: {feels_like}")
    print(f"Humidity: {humidity}")
    print(f"Current temperature: {temp}")
    print(f"Today's high: {temp_high}")
    print(f"Today's low: {temp_low}")

    return weather_data




if __name__ == "__main__":
    app.run()