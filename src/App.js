import React,{ useState } from "react";
import "./style.css"
import emojiDictionary from "./emojiList";

function App() {
  const [emojimeaning,setemojimeaning] = useState("");
  const emojiWeKnowArray = Object.keys(emojiDictionary);

  function emojiHandler(event){
      // console.log(event.target.value);
      var emoji = event.target.value;
      var meaning = emojiDictionary[emoji];
      if(meaning === undefined)
       meaning = "Sorry we dont have this in our database"
      setemojimeaning(meaning);
      // var emoji = event.target.value;
      // if(emoji in emojiDictionary)
      // setemojimeaning(emojiDictionary[emoji])
      // else
      // setemojimeaning("Sorry we dont know what it is")

  }
  function emojiClickHandler(emoji){
    var mean = emojiDictionary[emoji];
    setemojimeaning(mean);

  }
 
  return (
  <div>
  <h1>Emoji Interpreter</h1>
  <input onChange={emojiHandler} placeholder="Entry your emoji here"></input>
  <h2>{emojimeaning}</h2> 
  <h3>Emojis we know</h3>
  <ul>
    {
    emojiWeKnowArray.map(emoji => {
        return (<li 
                key={emoji} 
                onClick={()=>emojiClickHandler(emoji)}>
                  {emoji}
                  </li>
                  )
    })
  }
  </ul>
  </div>
  );
}

export default App;

