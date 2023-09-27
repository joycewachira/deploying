import React from 'react';

const YourBotArmy = ({ botArmy, onReleaseBot, onDischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
        {botArmy.map((bot) => (
          <div key={bot.id}>
            <div className="border border-gray-300 rounded-lg p-4 mb-4">
              <img
                src={bot.avatar_url}
                alt={`Avatar of ${bot.name}`}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">{bot.name}</h2>
              <p className="text-gray-500">Class: {bot.bot_class}</p>
              <p className="text-gray-500">Health: {bot.health}</p>
              <p className="text-gray-500">Damage: {bot.damage}</p>
              <p className="text-gray-500">Armor: {bot.armor}</p>
              <p className="text-gray-500">Catchphrase: {bot.catchphrase}</p>

              <button
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded mt-4"
                onClick={() => onReleaseBot(bot.id)}
              >
                Release
              </button>
              <button
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded mt-4 ml-2"
                onClick={() => onDischargeBot(bot.id)}
              >
                Discharge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
