import React from 'react';

const BotCollection = ({ botArmy , bots, onEnlistBot }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div>
        {bots.map((bot) => (
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

              {!botArmy.some((enlistedBot) => enlistedBot.id === bot.id) ? (
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 mr-2"
                  onClick={() => onEnlistBot(bot)}
                >
                  Enlist
                </button>
              ) : (
                <button
                  className="bg-red-500 text-white font-semibold py-2 px-4 rounded mt-4"
                  onClick={() => {}}
                  disabled
                >
                  Enlisted
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;


