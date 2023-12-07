import React, { useState } from "react";
import BotCard from "./BotCard"; 

function YourBotArmy({bots}) {
  const [selectedBots, setSelectedBots] = useState([]); 


  const addBot = (bot) => {
    // Check if the bot is not already in the selectedBots array
    if (!selectedBots.some((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {bots.map((bot) => (
            <BotCard 
              key={bot.id}
              bot={bot}
              addBot={() => addBot(bot)} />
          ))}
        </div>
      </div>
      <div>
          {selectedBots.map((selectedBot) => ( 
           <BotCard key={selectedBot.id} bot={selectedBot} addBot={() => addBot(selectedBot)} />
        ))} 
      </div>
    </div>
  );
}

export default YourBotArmy;
