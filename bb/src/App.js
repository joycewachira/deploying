import React, { useState } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Function to handle the enlist button click
  const handleEnlistClick = (bot) => {
    // Check if the bot is not already enlisted
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  // Function to handle the release button click
  const handleReleaseClick = (botId) => {
    // Remove the bot with the specified ID from the enlistedBots state
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div className="App">
      <BotCollection onEnlistBot={handleEnlistClick} />
      <YourBotArmy enlistedBots={enlistedBots} onReleaseBot={handleReleaseClick} />
    </div>
  );
}

export default App;

