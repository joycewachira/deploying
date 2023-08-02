import React, {useState} from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ onReleaseBot }) => {
    const [armyData, setArmyData] = useState([])

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Your Bot Army</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Map through the armyData and render each bot card */}
                {armyData.map((bot) => (
                   <div className="border border-gray-300 rounded-lg p-4 mb-4">
                        <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} className="w-24 h-24 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">{bot.name}</h2>
                        <p className="text-gray-500">Class: {bot.bot_class}</p>
                        <p className="text-gray-500">Health: {bot.health}</p>
                        <p className="text-gray-500">Damage: {bot.damage}</p>
                        <p className="text-gray-500">Armor: {bot.armor}</p>
                        <p className="text-gray-500">Catchphrase: {bot.catchphrase}</p> 
                    </div>
                ))};
            </div>
        </div>
    )
    }

export default YourBotArmy;
