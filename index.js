import { getMemesData, ENDPOINT } from "./api.js";

import { format, biggerThan, ascendingById } from "./utils.js";

function getMemeOfTheDay(memes) {
  const todayDate = new Date().getDate();
  return memes[todayDate - 1];
}



//function getMemes(url){
  //return
  //getMemesData(url) 
getMemes(ENDPOINT)
        .then(memes => memes
                      .map(format)
                      .filter(meme => biggerThan(meme, 500))
                      .sort(ascendingById))
        .then(memes => {const memeOfTheDay = getMemeOfTheDay(memes);
                       
        })
        .catch(err => console.error(err.message));
  //}


