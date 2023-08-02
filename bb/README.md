**Bb Enlistment App**

This is a React application that allows you to enlist bots into your bot army, release bots from the army, and discharge bots from the army permanently by deleting them from the backend. The app fetches data about available bots from an external API and provides an interface to manage your bot army.

**Getting Started**

To run the application locally, follow these steps:

1. Clone the repository:

git clone https://github.com/joycewachira/bb
cd bb

2. Install dependencies:
npm install

3. Start the development server:
npm start

The app will open in your default web browser at `http://localhost:3000`.

**Features**

The app provides the following features:

1. Viewing Bot Collection: You can view profiles of all available bots in the "Bot Collection" section. Each bot card displays its avatar, name, class, health, damage, armor, and catchphrase.

2. Enlisting Bots: You can enlist individual bots into your bot army by clicking the "Enlist" button on their respective cards. Once enlisted, the bot will appear in the "Your Bot Army" section.

3. Releasing Bots: If you no longer want a bot in your bot army, you can release it by clicking the "Release" button on its card. The bot will be removed from your bot army but will still be available in the "Bot Collection."

4. Discharging Bots: You can permanently discharge a bot from your bot army by clicking the "Discharge" button on its card. This will delete the bot from the backend API and remove it from your bot army.

**Components**

The application consists of the following components:

1. `App`: The main component that handles the state and logic of the app. It fetches bot data from the external API and manages the enlisted bot army.

2. `BotCollection`: Renders the "Bot Collection" section, displaying profiles of all available bots. It allows you to enlist bots into your bot army by clicking the "Enlist" button.

3. `YourBotArmy`: Renders the "Your Bot Army" section, displaying profiles of enlisted bots. It allows you to release bots from your bot army by clicking the "Release" button and permanently discharge bots by clicking the "Discharge" button.

**API Endpoint**

The application fetches bot data from the following API endpoint:

https://bot-data-yjzx.onrender.com/bots

The API provides data in JSON format with information about available bots.

**Technologies Used**

The application is built using the following technologies:

- React: A JavaScript library for building user interfaces.
- useState: A React hook for managing state within functional components.
- useEffect: A React hook for handling side effects, such as fetching data.
- Bootstrap: A popular CSS framework for styling the UI components.

**Contributing**

Contributions to this project are welcome. If you find any bugs, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.

**License**

This project is licensed under the MIT License. You can find the full license text in the LICENSE file.

**Author**

This application was created by [Joyce Wachira](https://github.com/joycewachira/bb).

