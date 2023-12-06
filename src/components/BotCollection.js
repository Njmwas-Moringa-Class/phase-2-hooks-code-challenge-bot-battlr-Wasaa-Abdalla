import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection() {
  // Your code here
  const [bots, setBots] = useState([]);

  useEffect(() => {
    //Fetching bots data from the server
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Fetching Failed:", error))
  }, []);
  return (
    <div className="ui four column grid">
      <div className="row">
      {bots.map((bot) => (
          <BotCard 
            key = {bot.id} 
            bot={bot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
