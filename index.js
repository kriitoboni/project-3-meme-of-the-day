import { getMemesData, ENDPOINT } from "./api.js";

import { format, biggerThan, ascendingById } from "./utils.js";

function getMemeOfTheDay(memes) {
  const todayDate = new Date().getDate();
  return memes[todayDate - 1];
}

function getRandomMeme(memes){
  const indexRandom = Math.floor(Math.random() * memes.length);
  const randomMeme = memes[indexRandom];
  return randomMeme;
}

let memeImgRandom = {};
let memeImg = {};
function getMemes(url){
  return getMemesData(url) 
        .then(memes => memes
                      .map(format)
                      .filter(meme => biggerThan(meme, 500))
                      .sort(ascendingById))
        .then(memes => {const memeOfTheDay = getMemeOfTheDay(memes);
                        memeImg.src = memeOfTheDay.url;
                        memeImg.alt = memeOfTheDay.name;
                        return memeImg;
        };              
        })
        .then(memes => {const theRandomMeme = getRandomMeme(memes);
                        memeImgRandom.src = theRandomMeme.url;
                        memeImgRandom.alt = theRandomMeme.name;
                        return memeImgRandom;
                       };
              })
        .catch(err => console.error(err.message));
  }
