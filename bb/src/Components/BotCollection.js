import React, {useEffect , useState} from 'react';
// import BotCard from './BotCard'; 


const BotCollection = ({onEnlistBot}) => {

  const [bots , setBots] = useState([]);
  

    useEffect(()=>{
      fetch('https://bot-data-yjzx.onrender.com/bots')
        .then((response) => response.json())
        .then((data)=> setBots(data))
    }, []);
    

    return (
      <div>
        <h2>Bot Collection</h2>
        <div >
          {bots.map((bot) => (
            <div>
              <div className="border border-gray-300 rounded-lg p-4 mb-4">
                <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} className="w-24 h-24 mx-auto mb-4" />
                <h2 className="text-xl font-semibold">{bot.name}</h2>
                <p className="text-gray-500">Class: {bot.bot_class}</p>
                <p className="text-gray-500">Health: {bot.health}</p>
                <p className="text-gray-500">Damage: {bot.damage}</p>
                <p className="text-gray-500">Armor: {bot.armor}</p>
                <p className="text-gray-500">Catchphrase: {bot.catchphrase}</p> 

                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 mr-2"
                    onClick={() => onEnlistBot(bot)}
                >
                    Enlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}


            {/* Render the enlist button if the bot is not enlisted
            {!enlisted && (
                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 mr-2"
                    onClick={handleEnlistClick}
                >
                    Enlist
                </button>
            )}

            {/* Render the release button if the bot is enlisted */}
            {/* {enlisted && (
                <button
                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded mt-4"
                    onClick={handleReleaseClick}
                >
                    Release
                </button> */}

  
  export default BotCollection;
  

  // className="text-2xl font-semibold mb-4"
  //className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"