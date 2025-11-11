# 🌦️ Weather Forecast App

A simple and user-friendly weather forecast web application built with **Node.js**, **Express**, and **Handlebars**.  
The app allows users to enter any location, retrieves its coordinates using the **TomTom Geocoding API**, and then fetches real-time weather data using the **WeatherStack API**.

---

## ⭐ Features

- Search weather by city name or any location
- Real-time temperature, feels-like value and weather description
- Server-side rendering using Handlebars (HBS)
- Client-side dynamic updates using Fetch API
- Graceful error handling and UI feedback
- API keys stored securely using `.env` configuration

---

## 🛠️ Technologies Used

| Area          | Technology       |
|---------------|-----------------|
| Backend       | Node.js, Express.js |
| Templating    | Handlebars (HBS) |
| API Services  | TomTom Geocoding API, WeatherStack API |
| Frontend      | Vanilla JS + Fetch API |
| Environment   | dotenv |

---

## 📦 Installation & Setup

Clone the repository:

```sh
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
Install dependencies:

sh
Copy code
npm install
Create a .env file in the root directory and add your API keys:

ini
Copy code
WEATHERSTACK_KEY=your_weatherstack_key
TOMTOM_KEY=your_tomtom_key
Start the server:

sh
Copy code
npm run dev
Or (if using nodemon manually):

sh
Copy code
nodemon src/app.js
Now open in your browser:

arduino
Copy code
http://localhost:3000
🔧 Project Structure
java
Copy code
project-folder/
│
├─ .env
├─ package.json
├─ src/
│  ├─ app.js
│  └─ utils/
│     ├─ geocode.js
│     └─ forecast.js
│
├─ public/
│  ├─ css/
│  └─ js/
│
└─ templates/
   ├─ views/
   └─ partials/
🌍 Deployment Notes
If deploying to platforms like Heroku, add your environment variables using:

sh
Copy code
heroku config:set WEATHERSTACK_KEY=your_key
heroku config:set TOMTOM_KEY=your_key
The app will automatically use them via process.env.


📄 License
This project is free to use and modify for learning and personal development.

If you want to colaburate with me my email is: michaelkulhs@gmail.com
