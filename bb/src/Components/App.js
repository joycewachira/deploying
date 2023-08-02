import React, { useEffect, useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('https://bot-data-yjzx.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleEnlistBot = (bot) => {
    // Check if the bot is not already enlisted
    if (!botArmy.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const handleReleaseBot = (botId) => {
    // Remove the bot from the botArmy based on its id
    setBotArmy(botArmy.filter((enlistedBot) => enlistedBot.id !== botId));
  };

  const handleDischargeBot = (botId) => {
    // Remove the bot from the backend
    fetch(`https://bot-data-yjzx.onrender.com/bots/${botId}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        // Remove the bot from the botArmy based on its id
        setBotArmy(botArmy.filter((enlistedBot) => enlistedBot.id !== botId));
      }
    });
  };

  return (
    <div>
      <h1>Bot Army Enlistment</h1>
      <BotCollection botArmy={botArmy} bots={bots} onEnlistBot={handleEnlistBot} />
      <YourBotArmy
        botArmy={botArmy}
        onReleaseBot={handleReleaseBot}
        onDischargeBot={handleDischargeBot}
      />
    </div>
  );
};

export default App;

