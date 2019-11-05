import { getMemesData, ENDPOINT } from "./api.js";

import { format, biggerThan, ascendingById } from "./utils.js";

function getMemes(url){
  return getMemesData(url)
  .then(memes => memes
                      .map(format)
                      .filter(meme => biggerThan(meme, 500))
                      .sort(ascendingById)
        )
  .catch(err => console.error(err.message));
  }


console.log(getMemes(ENDPOINT));


