import React, { useState, useEffect } from "react"; 
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]); 
  const [armyBot, setArmyBot] = useState([]); 

  useEffect(() => {
    
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []); 

  function addToArmy(bot) {
    if (!armyBot.some((armyBot) => armyBot.id === bot.id)) {
      setArmyBot([...armyBot, bot]);
    }
  }

  function releaseFromArmy(bot) {
    setArmyBot(armyBot.filter((armyBot) => armyBot.id !== bot.id));
  }

  function dischargeFromArmy(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setArmyBot(armyBot.filter((armyBot) => armyBot.id !== bot.id));
        setBots(bots.filter((bot) => bot.id !== bot.id));
      });
  }


  return (
    <div>
      <div>
      <YourBotArmy
        bots={bots}
        armyBot={armyBot}
        handleRemove={releaseFromArmy}
        dischargeFromArmy={dischargeFromArmy}
      />
      <BotCollection
        bots={bots}
        handleAdd={addToArmy}
        dischargeFromArmy={dischargeFromArmy}
      />
    </div>
    </div>
  )
}

export default BotsPage;
