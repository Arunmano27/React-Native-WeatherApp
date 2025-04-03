##WeatherApp

A simple React Native Weather App that fetches weather data from an API and displays real-time weather conditions for different locations.

🚀 Getting Started

Prerequisites

Ensure you have the following installed on your system:

Node.js (>= 18)

npm

React Native CLI

Android Studio (for Android development) or Xcode (for iOS development)

🔧 Installation

Clone the repository:

git clone https://github.com/your-repo/WeatherApp.git
cd WeatherApp

Install dependencies:

npm install
# or
yarn install

⚙️ Environment Variables

Create a .env file in the root of the project and add your API key:

WEATHER_API_KEY=your_api_key_here
WEATHER_ICON_PATH=https://openweathermap.org/img/wn/

Then, make sure to load the environment variables in your app by installing react-native-dotenv:

npm install react-native-dotenv

📱 Running the App

Android

npm run android

iOS

cd ios
pod install
cd ..
npm run ios

🧪 Running Tests

To run Jest tests:

npm test

🏗️ Architecture Decisions

1️⃣ Component-Based Structure

Separation of Concerns: Components are divided into components/, screens/, and context/.

Reusable Components: UI elements like WeatherCard are kept in components/ for reuse.

2️⃣ State Management

Uses React Context API for managing weather state.

Local storage is managed with AsyncStorage for persisting user preferences.

3️⃣ API Handling

Weather data is fetched using fetch() with an abstraction in api/.

API calls are wrapped in error handling functions for robustness.

4️⃣ TypeScript for Type Safety

Type definitions for weather data are stored in a separate types.ts file.

📄 License

This project is licensed under the MIT License.
